/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {

    const n = arr.length;

    // Find the minimum and maximum elements in the array
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // Calculate the common difference
    if ((max - min) % (n - 1) !== 0) return false;
    const diff = (max - min) / (n - 1);

    // Use a Set to check if all expected elements are present
    const seen = new Set(arr);
    for (let i = 0; i < n; i++) {
        const expectedValue = min + i * diff;
        if (!seen.has(expectedValue)) {
            return false;
        }
    }

    return true;


};