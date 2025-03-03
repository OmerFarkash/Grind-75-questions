// idea: using set oprerations are abit better then hash because you don't need to store an extra value.
// if we encounter the same value twice end it. that's why O(k) best or O(n) worst

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) return true; // Early return on duplicate
        seen.add(num);
    }
    return false;
};