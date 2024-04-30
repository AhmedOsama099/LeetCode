/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  let romanCharsValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  let index = 0;

  while (index < s.length) {
    if (/^(4|9|40|90|400|900)$/.test(romanCharsValues[s[index + 1]] - romanCharsValues[s[index]])) {
      sum += romanCharsValues[s[index + 1]] - romanCharsValues[s[index]];
      index = index + 2;
    } else {
      sum += romanCharsValues[s[index]];
      index = index + 1;
    }
  }
  return sum;
};

