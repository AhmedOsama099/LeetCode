/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (/^(\w)\1*$/.test(s)) {
    return s;
  }

  let res = "";
  for (let i = 0; res.length < s.length - i; i++) {
    for (let j = s.length - 1; res.length <= j - i; j--) {
      if (i === j + 1) return;
      if (s[i] === s[j]) {
        let str = s.slice(i, j + 1);
        let isPalindrome = true;
        for (let k = 0; k < str.length / 2 && isPalindrome; k++) {
          if (str[k] !== str[str.length - 1 - k]) {
            isPalindrome = false;
          }
        }
        res = isPalindrome ? str : res;
      }
    }
  }
  return res;
};

