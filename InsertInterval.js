// idea: append before and after the new interval, merge overlaps 

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let ret = []
    let [s, e] = newInterval
    let i = 0, n = intervals.length

    // Add all intervals before newInterval
    while (i < n && intervals[i][1] < s) {
        ret.push(intervals[i])
        i++;
    }

    // Merge overlapping intervals
    while (i < n && intervals[i][0] <= e) {
        s = Math.min(s, intervals[i][0])
        e = Math.max(e, intervals[i][1])
        i++
    }
    ret.push([s, e])

    // Add all intervals after newInterval
    while (i < n) {
        ret.push(intervals[i]);
        i++
    }

    return ret
}
