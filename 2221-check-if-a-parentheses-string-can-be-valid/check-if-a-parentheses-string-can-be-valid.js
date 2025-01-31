/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
    let n = s.length
    if (n % 2 !== 0) return false

    let openCount = 0;
    for (let i = 0; i < n; i++) {
        // if ( and 0 -- ( and 1 -- ) and 0
        if (s[i] === '(' || locked[i] === '0') {
            openCount++;
         // if ) and 1
        } else {
            openCount--;
        }
        if (openCount < 0) {
            return false;
        }
    }

    let closeCount = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === ')' || locked[i] === '0') {
            closeCount++;
        } else {
            closeCount--;
        }
        if (closeCount < 0) {
            return false;
        }
    }

    return true;
};