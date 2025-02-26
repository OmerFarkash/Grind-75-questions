// idea1: just count all when you see a number for half of the len it's been found

// idea2: better solution - count the only number that matters or replace it
// we know that it's suppose to be bigger then len / 2 that's why it's for sure always found on top

/**
 * @param {number[]} nums
 * @return {number}
 */
// sol 1
var majorityElement = function(nums) {
    let len = nums.length / 2
    let map = {}
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1
        if (map[num] > len) return num
    }
};

// sol 2
var majorityElement = function(nums) {
    let number = null
    let count = 0
    for (let num of nums) {
        if (num === number) count++
        else if (count > 0){
            count--
        }
        else number = num
    }
    return number
};

nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums))