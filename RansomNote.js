// idea: use hash for easy searching of letters exists or not in magazine.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    my_map = {}
    for (let letter of magazine) {
        my_map[letter] = (my_map[letter] || 0) + 1
    }
    for (let letter of ransomNote) {
        if (!my_map[letter]) {
            return false
        }
        my_map[letter]--
    }
    return true
};