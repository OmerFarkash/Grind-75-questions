// idea: calculate the sum of each index in the strings and their carry when need
// store in array because it saves operations time (instead of pure string)

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = []
    let carry = 0
    let i = a.length - 1
    let j = b.length - 1

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;
        if (i >= 0) sum += a.charCodeAt(i--) - 48
        if (j >= 0) sum += b.charCodeAt(j--) - 48

        result.push(sum % 2)
        carry = Math.floor(sum / 2)
    }
    return result.reverse().join('')
}