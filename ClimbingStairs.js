// idea: idendtify the pattern - each new step me take is the sum of different
// patterns to take the last step and the step before it.
// it's the same as fibonacci series just with other starting point. 

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let last = 0
    let solution = 1
    for (let i = 0; i < n; i++) {
        let temp = solution
        solution += last
        last = temp
    }
    return solution
};