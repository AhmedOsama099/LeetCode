/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function (nums, target) {
    // Object to save complement (target - current value) and complement index in
  let checkObject = {};
  for (let i = 0; i < nums.length; i++) {
    // If Object has current value as key, it means we passed by its compliment before
    // and now we have a pair that their sum is the target
    if (checkObject[nums[i]] !== undefined) {
      return [checkObject[nums[i]], i];
    } else {
      let complement = target - nums[i];
      checkObject[complement] = i;
    }
  }

  return [-1,-1];
};


