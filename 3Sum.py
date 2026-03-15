class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        # Sorting is crucial for the two-pointer technique and duplicate skipping
        nums.sort() 
        sol = []

        for i in range(len(nums)):
            # Skip duplicate elements for the first number to avoid duplicate triplets
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            
            # Initialize two pointers
            left = i + 1
            right = len(nums) - 1
            
            while left < right:
                total = nums[i] + nums[left] + nums[right]
                
                if total < 0:
                    # Sum is too small, we need a larger number, move left pointer up
                    left += 1
                elif total > 0:
                    # Sum is too large, we need a smaller number, move right pointer down
                    right -= 1
                else:
                    # Found a valid triplet
                    sol.append([nums[i], nums[left], nums[right]])
                    
                    # Move both pointers inward to look for the next potential pair
                    left += 1
                    right -= 1
                    
                    # Skip duplicate elements for the second number 
                    # (the third number will inherently be different if the second is)
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                        
        return sol