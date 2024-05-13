/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let index = 0;
    let sign = 1;
    let sum = ""
    let isStopper = false
    while (index < s.length) {
        if ((/^(?!0$)\d+$/).test(s[index]) || (s[index] === "0" && (/^(?!0$)\d+$/).test(sum[0]) )) { 
            sum = sum + s[index]
        } else if (((/-/).test(s[index]) || (/\+/).test(s[index])) && !isStopper && !sum[0]) {
            isStopper = true
            sign = (/\+/).test(s[index]) ? 1 : -1
        }
        else if (s[index] === "0") {
            isStopper = true
            index++
            continue;
        } else if (s[index] === " " && !isStopper && !sum[0]) {
            index++
            continue;
        }
        else {
            break
        }
        index++
    }

    if (sign === -1 && sum > 2147483647) {
        return 2147483648 * -1
    } else if (sign === 1 && sum > 2147483646) {
        return 2147483647
    } else {
        return sum * sign
    }
};