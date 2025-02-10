# idea: after i get one number for the array 
# i will look for his pair to get to the traget directly using dictionary.


class Solution:
    def twoSum(self, nums, target):
        my_map = {}
        for i in range(len(nums)):
            if nums[i] not in my_map:
                my_map[nums[i]] = [i]
            else:
                last = my_map[nums[i]]
                last.append(i)
        for i in range(len(nums)):
            ans = target - nums[i]
            array = my_map.get(ans)
            if array:
                if i in array:
                    if len(array) > 1:
                        array.remove(i)
                        return [i, array[0]]
                    else: 
                        continue
                else:
                    return [i, array[0]]
    
 
n = [3,3] 
t = 6
solution = Solution()    
print()
print(solution.twoSum(nums=n, target=t))  