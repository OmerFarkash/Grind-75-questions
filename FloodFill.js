// idea: change color if need, make sure to not visit there again
// each round -> pop to all 4 sides

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let org = image[sr][sc]
    if (org === undefined || org === color) return image

    let rows = image.length, cols = image[0].length
    let done = Array.from({length: rows}, () => Array(cols).fill(false))
    done[sr][sc] = false

    const helper = (r, c) => {
        if (r < 0 || c < 0 || r >= rows || c >= cols || image[r][c] !== org || done[r][c])
            return

        image[r][c] = color
        done[r][c] = true

        helper(r+1, c)
        helper(r-1, c)
        helper(r, c+1)
        helper(r, c-1)
    }
    helper(sr, sc)
    
    return image
};

image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1
sc = 1
color = 2

console.log(floodFill(image, sr, sc, color))
console.log("after")