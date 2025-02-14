// idea: find directly each of the elements (O(n))
// also possible - order s, t then compare (O(n^2))

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    hash = {}
    for (let char of s) {
        // count the number of appearances of that char in s
        hash[char] = (hash[char] || 0) + 1
    }
    for (let char of t) {
        if (!hash[char]) return false
        hash[char]--   
    }
    return true
};

s = "anagram" 
t = "nagaram"

console.log(isAnagram(s,t))