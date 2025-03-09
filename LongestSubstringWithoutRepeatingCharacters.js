// idea: creating a sliding window and keeping it without duplications 
// - otherwize move the window and update last appearance 

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    n = s.length
    if (!s | s.length === 0) return 0
    let max = 0
    let map = new Map()
    let start = 0

    for (let end = 0; end < n; end++) {
        let char = s[end]

        if (map.has(char) && map.get(char) >= start) {
            start = map.get(char) + 1
        }

        map.set(char, end)

        max = Math.max(max, end - start + 1)
    }
    return max
};