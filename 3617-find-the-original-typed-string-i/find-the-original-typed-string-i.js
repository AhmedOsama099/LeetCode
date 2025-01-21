/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {

    let counter = 1;
    let i = 0;
    let j = word.length - 1
    let isEven = word.length % 2 === 0
    let half = word.length / 2
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

    if (isEven && word[half - 1] === word[half] && counter > 1) {
        counter--
    }
    return counter;

    /* - Another Solution
     
        let counter = 1;
        for (let i = 0; i < word.length - 1; i++) {
            if (word[i] === word[i + 1]) {
                counter++
            }
        }
        return counter; 
    */




};

