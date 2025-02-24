// idea: every element can be use only if it's doubled
// otherwize it could be use only for one additional element (for the muddle char)

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (!s) return 0
    map = {}
    for (let i of s) {
        map[i] = (map[i] || 0) + 1
    }
    longest = 0
    con = true
    for (let [key, value] of Object.entries(map)) {
        if (value % 2 === 0) {
            longest += value
        }
        else {
            longest += value - 1
            if (con) {
                con = false
                longest += 1
            }
        }
    }
    return longest
};