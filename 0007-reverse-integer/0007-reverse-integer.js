/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let num = Number(String(Math.abs(x)).split("").reverse().join(""))
    if (num > 0x7FFFFFFF) {
        return 0
    } else {
        return num = x < 0 ? num * -1 : num
    }
};