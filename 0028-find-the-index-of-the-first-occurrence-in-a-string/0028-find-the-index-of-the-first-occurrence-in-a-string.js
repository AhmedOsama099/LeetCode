/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (haystack === needle && haystack.length > 0) return 0;
    for (let i = 0, j = 0; i < haystack.length; i++) {
        if (haystack[i] !== needle[j]) {
            i = i - j
            j = 0
        }
        else if (j === needle.length - 1) {
            return i - j;
        }
        else {
            j++
        }
    }
    return -1;
};