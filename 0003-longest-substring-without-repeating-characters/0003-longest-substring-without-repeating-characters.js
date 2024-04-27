/**
 * @param {string} s
 * @return {number}
 */

/* Idea

Deining longest substring bas using an external space (object) to hold chars and values
and check every time if they are in it or not (if unique or not)

when meeting a repeated char we will define its index that is correspondant to its key in 
object with the repeated index which will help us to define each time 
if repeated char is withing or newly created substring or before it in last substring
bu maing the If conition

*/

var lengthOfLongestSubstring = function (s) {
  // this var will always point to substring we are trying to create now (now: in each loop)
  let startIndex = 0;
  // max length of created substring
  let maxLength = 0;
  // we assign chars here to detect later whether they got used or not
  let checkUniqueCharsObj = {};

  for (let i = 0; i < s.length; i++) {
    // We check two things here:
    // a. If char is not unique so it has valeu in object
    // b. If saved char index is higer than start index
    //    i. why? because we want to check if char is repeated in currently created substring
    if (checkUniqueCharsObj[s[i]] >= startIndex) {
      // define max length
      if (i - startIndex > maxLength) {
        maxLength = i - startIndex;
      }
      // defining start index by checking if char is repeated for example at:
      // index 2 and 5 and we found out that at iteration of index 5
      // so our newly created syb string will be starting from the char that is after
      // this not unique char which will be index 3
      startIndex = checkUniqueCharsObj[s[i]] + 1;
    }
    // assign object with chars as key and indices as values every iteration
    checkUniqueCharsObj[s[i]] = i;
  }

  // this check because if last substring was the longest one
  // as every substring is defined by entering the if confition by meeting a repeated char
  // so if last substring is the longest one it will end without enting this confition
  // so we wont define it using length prop but using the s.length - startIndex
  return maxLength >= s.length - startIndex ? maxLength : s.length - startIndex;
};
