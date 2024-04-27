/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let resultArr = [];
  let helper = 1;
  for (let i = 0, j = 0; i < s.length; i++) {
    if (i - numRows < 0) {
      resultArr.push("");
    }
    resultArr[j] = resultArr[j] + s[i];
    if (j === numRows - 1) {
      helper = -1;
    } else if (j === 0) {
      helper = 1;
    }
    j = j + helper;
  }
  return resultArr.join("");
};