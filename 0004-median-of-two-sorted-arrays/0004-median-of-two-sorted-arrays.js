/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let i = 0,
    j = 0;

  let totalLegth = nums1.length + nums2.length;
  let resultArr = [];
  while (resultArr.length <= totalLegth / 2) {
    if (nums1[i] <= nums2[j] || nums2[j] === undefined) {
      resultArr.push(nums1[i]);
      i++;
    } else {
      resultArr.push(nums2[j]);
      j++;
    }
  }
  if (totalLegth % 2 === 0) {
    return (
      (Number(resultArr[resultArr.length - 1]) +
        Number(resultArr[resultArr.length - 2])) /
      2
    );
  } else {
    return resultArr[resultArr.length - 1];
  }
};