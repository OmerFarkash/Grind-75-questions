// idea: better then BFS using dynamic programming and checks only part of the posible options.

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let m = mat.length
    let n = mat[0].length;
    let ret = Array.from({ length: m }, () => Array(n).fill(Infinity))

    // Step 1: Forward pass (Top to Bottom, Left to Right)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                ret[i][j] = 0
            } else {
                if (i > 0) ret[i][j] = Math.min(ret[i][j], ret[i - 1][j] + 1)
                if (j > 0) ret[i][j] = Math.min(ret[i][j], ret[i][j - 1] + 1)
            }
        }
    }

    // Step 2: Backward pass (Bottom to Top, Right to Left)
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (i < m - 1) ret[i][j] = Math.min(ret[i][j], ret[i + 1][j] + 1)
            if (j < n - 1) ret[i][j] = Math.min(ret[i][j], ret[i][j + 1] + 1)
        }
    }

    return ret
};


let mat = [[0,0,0],[0,1,0],[1,1,1]]
console.log(updateMatrix(mat))