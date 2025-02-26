// idea: move to next node for contection to the rest of the list.
// now, replace the direction of the pointers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) return head
    let org = head

    let last = org
    head = head.next

    while(head) {
        let next = head.next
        head.next = last
        last = head
        head = next
    }
    org.next = null
    return last
};

var list = new ListNode(1, new ListNode(2, null))
console.log(reverseList(list))