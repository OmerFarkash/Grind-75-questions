// idea: classic binary search
// the extra issue is to make sure the window collapse to 1 that way there's no earlier bad version


/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0
        let end = n
        half = Math.round((start+end)/2)
        while(half !== end) {
            if (isBadVersion(half)) {
                end = half
            } else {
                start = half
            }
            half = Math.round((start+end)/2)
        }
        return half
    };
};