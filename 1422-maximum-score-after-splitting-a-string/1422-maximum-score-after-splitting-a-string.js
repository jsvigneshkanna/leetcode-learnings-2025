/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let ones = 0
    for (let index=0; index< s.length; index++) {
        if (s[index] === '1') {
            ones++
        }
    }

    let ans = -Infinity
    let zeros = 0

    for (let index=0; index<s.length-1; index++) {
        if (s[index] === '1') {
            ones--
        } else {
            zeros++
        }

        ans = Math.max(ans, ones+ zeros)
    }

    return ans
};