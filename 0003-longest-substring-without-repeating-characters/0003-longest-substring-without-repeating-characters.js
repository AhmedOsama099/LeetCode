/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let startIndex = 0;
  let maxLength = 0;
  let checkUniqueCharsObj = {};
  for (let i = 0; i < s.length; i++) {
    if (checkUniqueCharsObj[s[i]] >= startIndex) {
      if (i - startIndex > maxLength) {
        maxLength = i - startIndex;
      }
      startIndex = checkUniqueCharsObj[s[i]] + 1;
    }
    checkUniqueCharsObj[s[i]] = i;
  }
  return maxLength >= s.length - startIndex ? maxLength : s.length - startIndex;
};
