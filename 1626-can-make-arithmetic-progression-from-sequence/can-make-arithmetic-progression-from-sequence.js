/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {

    if (arr.length < 2) return true

    arr.sort((a, b) => a - b);
    let standardVal = arr[1] - arr[0];

    for (let i = 1; i < arr.length - 1; i++) {
        val = arr[i + 1] - arr[i]
        if (val !== standardVal) {
            return false
        }
    }

    return true

/* -- Optimum Solution

    const n = arr.length;

    // Find the minimum and maximum elements in the array
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // Calculate the common difference
    const diff = (max - min) / (n - 1);
    if ((max - min) % (n - 1) !== 0) return false;

    // Use a Set to check if all expected elements are present
    const seen = new Set(arr);
    for (let i = 0; i < n; i++) {
        const expectedValue = min + i * diff;
        if (!seen.has(expectedValue)) {
            return false;
        }
    }

    return true; 
*/


};