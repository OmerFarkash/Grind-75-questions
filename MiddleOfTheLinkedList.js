// idea: go twice as fast, when the list is over you got to the middle
// the head goes last to make sure the second middle always returns 

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
var middleNode = function(head) {
    if (!head) return head
    let fast = head
    while (fast) {
        fast = fast.next
        if (fast) 
            fast = fast.next
        else 
            break
        head = head.next
    }
    return head
};