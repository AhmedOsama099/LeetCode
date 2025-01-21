/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {


    let counter = 1;
    let i = 0;
    let j = word.length - 1
    let isEven = word.length % 2 === 0
    while (i < j) {
        if (word[i] === word[i + 1]) {
            counter++
        }
        if (word[j] === word[j - 1]) {
            counter++
        }
        i++
        j--
    }


    let half = word.length / 2

    if (isEven && word[half - 1] === word[half] && counter > 1) {
        console.log("here")
        counter--
    }

    return counter
};

