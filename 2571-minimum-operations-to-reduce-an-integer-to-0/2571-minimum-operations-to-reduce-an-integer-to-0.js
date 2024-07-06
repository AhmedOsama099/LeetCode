/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {

    let power = Math.log2(n)
    if(Number.isInteger(power)){
        return 1;
    }
    let lowerTarget = power % 1 >= 0.5 ? Math.round(power) - 1 : Math.round(power)
    lowerTarget = Math.abs(n - Math.pow(2, lowerTarget))
    let biggerTarget = power % 1 >= 0.5 ? Math.round(power) : Math.round(power) + 1
    biggerTarget = Math.abs(n - Math.pow(2, biggerTarget))

 
    let isLoop1 = true;
    let minIndex = 0;
    let calc1 = 0
    while (isLoop1) {
        if (Number.isInteger(Math.log2(lowerTarget + minIndex))) {
            calc1++
            if (minIndex === 0) {
                isLoop1 = false;
                break;
            } else {
                lowerTarget =  minIndex
                minIndex = 0
            }
        } else if (Number.isInteger(Math.log2(lowerTarget - minIndex))) {
            calc1++
            if (minIndex === 0) {
                isLoop1 = false;
                break;
            } else {
                lowerTarget =  minIndex
                minIndex = 0
            }
        }
        else {

            minIndex++
        }
    }

    let isLoop2 = true;
    let maxIndex = 0
    let calc2 = 0;
    while (isLoop2) {

        if (Number.isInteger(Math.log2(biggerTarget + maxIndex))) {
            calc2++
            if (maxIndex === 0) {
                isLoop2 = false;
                break;
            } else {
                biggerTarget =maxIndex
                maxIndex = 0
            }
        }else if (Number.isInteger(Math.log2(biggerTarget - maxIndex))){
                calc2++
            if (maxIndex === 0) {
                isLoop2 = false;
                break;
            } else {
                biggerTarget =  maxIndex
                maxIndex = 0
            }
        } else {

            maxIndex++
        }
    }

    return Math.min(calc1, calc2) + 1
};

