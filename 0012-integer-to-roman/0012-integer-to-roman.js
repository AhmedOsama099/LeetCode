/**
 * @param {number} num
 * @return {string}
 */


var intToRoman = function (num) {
  let romanCharsValues = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };

  const romanCharsKeys = Object.keys(romanCharsValues);

  let stringInput = String(num);
  let index = 0;
  let romanShape = "";
  while (index < stringInput.length) {
    let digitValue =
      stringInput[index] * Math.pow(10, stringInput.length - index - 1);
    if (digitValue !== 0) {
      let firstDigit = String(digitValue)[0];
      let digitNearestTensRomanMatch = digitValue / firstDigit;

      if (firstDigit === "4") {
        const currentIndex = romanCharsKeys.indexOf(
          String(digitNearestTensRomanMatch)
        );
        const nextKey = Number(romanCharsKeys[currentIndex + 1]);

        romanShape =
          romanShape +
          romanCharsValues[digitNearestTensRomanMatch] +
          romanCharsValues[nextKey];
      } else if (firstDigit === "9") {
        const currentIndex = romanCharsKeys.indexOf(
          String(digitNearestTensRomanMatch)
        );
        const nextKey = Number(romanCharsKeys[currentIndex + 2]);

        romanShape =
          romanShape +
          romanCharsValues[digitNearestTensRomanMatch] +
          romanCharsValues[nextKey];
      } else if (firstDigit >= 5) {
        let numberOfRepeats = firstDigit - 5;
        let x = String(digitValue).replace(String(digitValue).charAt(0), "5");
        const currentIndex = romanCharsKeys.indexOf(x);
        const lastKey = romanCharsKeys[currentIndex - 1];
        romanShape =
          romanShape +
          romanCharsValues[Number(x)] +
          romanCharsValues[lastKey].repeat(Number(numberOfRepeats));
      } else {
        romanShape =
          romanShape +
          romanCharsValues[digitNearestTensRomanMatch].repeat(
            Number(firstDigit)
          );
      }

      console.log("romanShape", romanShape);
    }
    index++;
  }
  return romanShape;
};

