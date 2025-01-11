/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {

    let cash = {}
    let max = -1;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i].toString().split("").reduce((acc, curr) => {
            return Number(acc) + Number(curr)
        }, 0)
        if (cash[num]) {
            max = Math.max(max, nums[i] + cash[num])
            cash[num] = Math.max(nums[i], cash[num])
        }else{
        cash[num] = nums[i]
        }

    }
    return max

};