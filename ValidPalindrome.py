# idea: use regex to keep all letters, numbers
# convert them into lowercase
# check if first half is equal to reverse second half
# ignore middle if it's odd length (equal both sides)

import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = re.sub(r'[^a-zA-Z0-9]', '', s).lower()

        length = int(len(s)/2)
        i = 1
        for char in s[:length]:
            if char != s[-i]:
                return False
            i += 1
        return True
        
        
s = "A man, a plan, a canal: Panama"
sol = Solution()
print('\n')
print(sol.isPalindrome(s))