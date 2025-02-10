# idea: using stack for closing any open parentheses 
# after the parse (using the other side of the parenthese to confirm) 

class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        my_stack = []
        map = {')' : '(', ']' : '[', '}' : '{'}
        while(len(s)):
            curr = s[0]
            if len(my_stack) == 0:
                my_stack.append(curr)
                s = s.replace(curr, '',1)
            else:
                if my_stack[-1] == map.get(curr):
                    my_stack.pop()
                    s = s.replace(curr, '',1)
                else:
                    my_stack.append(curr)
                    s = s.replace(curr, '',1)
        
        if len(my_stack) == 0:
            return True
        return False
    
solution = Solution()
string = "(){}}{"
result = solution.isValid(string)
print()
if result:
    print("true")
else:
    print("false")