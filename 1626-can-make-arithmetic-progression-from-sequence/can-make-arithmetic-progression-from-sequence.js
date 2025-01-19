/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
    if (arr.length < 1) return false

    arr.sort((a, b) => a - b);
    let standardVal = arr[1] - arr[0];

    for (let i = 1; i < arr.length - 1; i++) {
        val = arr[i + 1] - arr[i]
        if (val !== standardVal) {
            return false
        }
    }

    return true
};