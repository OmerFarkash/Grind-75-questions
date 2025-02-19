// idea: bunny and turtule algorithm:
// the bunny run twice as fast as the turtule so if there's a cicle they will meet again.


// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false
    let bunny = head
    let turtule = head 
    while(bunny && bunny.next) {
        
        bunny = bunny.next.next    
        turtule = turtule.next 
        
        if (bunny === turtule) return true
    }
    return false
};