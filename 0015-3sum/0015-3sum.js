/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; nums[i] <= 0; i++) {
        if (nums[i] === nums[i - 1]) continue;
        let right = i + 1, left = nums.length - 1;
        while (right < left) {
            let res = nums[i] + nums[right] + nums[left]
            if (!res) {
                result.push([nums[i], nums[right], nums[left]]);
                left--
                right++
                while(right < left && nums[left] === nums[left+1]) left--
                while(right < left && nums[right] === nums[right-1]) right++
            }
            else if (res > 0) {
                left--
            } else {
                right++
            }
        }
    }
    return result;
};