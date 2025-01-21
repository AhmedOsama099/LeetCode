/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {
 
    let counter = 1;
    for (let i = 0; i < word.length - 1; i++) {
        if (word[i] === word[i + 1]) {
            counter++
        }
    }
    return counter;


};

