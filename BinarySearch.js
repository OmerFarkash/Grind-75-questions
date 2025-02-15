// idea: split in half each round if the target is bigger or smaller
// then the middle of the array 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0
    let end = nums.length
    while (start != end) {
        var half = parseInt((start + end) / 2)
        if (nums[half] < target) {
            if (start === half) return -1
            start = half
        }
        else if (nums[half] > target) {
            if (end === half) return -1
            end = half
        }
        else if (nums[half] === target) {
            return half
        }
        else return -1
    }
    return -1
};



nums = [5]
target = -5

console.log(search(nums, target))