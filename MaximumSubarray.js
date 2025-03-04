// idea: append the number or start a new sub array (Kadane’s Algorithm)

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums || nums.length === 0) return 0
    
    let maxSum = nums[0]
    let currentSum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum;
};