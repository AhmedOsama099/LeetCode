/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0;
    let k = nums.length - 1
    while (i < nums.length && i <= k) {
        if (nums[i] === val) {
            let temp = nums[k];
            nums[k] = nums[i];
            nums[i] = temp;
            k--;
        } else {
            i++;
        }
    }
    return k+1;


};
