/**
 * @param {number[]} nums
 * @return {number}
 */

 function getSumOfDigits(num) {
  num = Math.abs(num); // Handle negative numbers
  let sum = 0;

  while (num > 0) {
    sum += num % 10; // Get the last digit
    num = Math.floor(num / 10); // Remove the last digit
  }

  return sum;
}

var maximumSum = function (nums) {

    let cash = {}
    let max = -1;
    for (let i = 0; i < nums.length; i++) {
        let num = getSumOfDigits(nums[i])
        if (cash[num]) {
            max = Math.max(max, nums[i] + cash[num])
            cash[num] = Math.max(nums[i], cash[num])
        }else{
        cash[num] = nums[i]
        }

    }
    return max

};