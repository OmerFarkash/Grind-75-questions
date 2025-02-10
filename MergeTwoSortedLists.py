#idea: compare between the lists for each node
# smaller goes first and move on to the next one 


# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        

class Solution(object):
    def mergeTwoLists(self, list1, list2):
        """
        :type list1: Optional[ListNode]
        :type list2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        node = ListNode()
        tail = node
        
        while list1 and list2:
            if list1.val <= list2.val:
                tail.next = list1
                list1 = list1.next
            else:
                tail.next = list2
                list2 = list2.next

            tail = tail.next
        
        if list1:
            tail.next = list1
        elif list2:
            tail.next = list2
        return node.next
                
list1 = ListNode(1, ListNode(2, ListNode(4, None)))                
list2 = ListNode(1, ListNode(3, ListNode(4, None)))

sol = Solution()
final = sol.mergeTwoLists(list1, list2)
print()