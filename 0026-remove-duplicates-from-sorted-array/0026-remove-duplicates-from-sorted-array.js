/**
 * @param {number[]} nums
 * @return {number}
 */

 function removeDuplicates(nums) {
        if(nums.length === 0)  return 0;
        let pointer = 1;
        for(let i =1; i < nums.length;i++){
            if(nums[i] !== nums[i-1]){
                nums[pointer] = nums[i];
                pointer++
            }
        }
        return pointer
}



// var removeDuplicates = function (nums) {
//     let index=0;
//     while (nums[index+1] !== undefined) {
//        if(nums[index] === nums[index+1]){
//         nums.splice(index,1)
//        }else{
//         index++
//        }

//     }
// };