/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  for (
    let i = 0, j = String(x).length - 1;
    i < (String(x).length/2);
    i++, j--
  ) {
    if (String(x)[i] !== String(x)[j]) {
      return false;
    }
  }
  return true;
};