// Given an array nums of n integers, 
// are there elements a, b, c in nums such that a + b + c = 0? 
// Find all unique triplets in the array which gives the sum of zero.
// 
// Note:
// 
// The solution set must not contain duplicate triplets.
// 
// Example:
// 
// Given array nums = [-1, 0, 1, 2, -1, -4],
// 
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


const threeSum = (nums) => {
  
  if (nums.length < 3){
    return [];
  }
  
  if (nums.length === 3){
    const numSum = nums[0] + nums[1] + nums[2];
    if (numSum === 0){
      return [nums];
    } 
    return [];
  }
  
  let start = 0;
  let middle = 1;
  let end = 2;
  let twoSum = nums[start] + nums[middle]
  let target = 0 - twoSum;
  let output = [];
  let currentSums = [nums[start], nums[middle]];
  
  while (start < (nums.length - 3)){ 
    if (nums[end] === target){
      currentSums.push(nums[end]);
      currentSums = currentSums.sort()
      let matchCount = 0;
      let isMatch = false
      for (let i = 0; i < output.length; i++){
        
        if (output[i][0] === currentSums[0] && output[i][1] === currentSums[1] && output[i][2] === currentSums[2]) {
          isMatch = true
        }
      }
      if (!isMatch){
        output.push(currentSums);
      }
      currentSums = [nums[start], nums[middle]];
      twoSum = nums[start] + nums[middle];
      target = 0 - twoSum;
      end++
    } else {
      end++
      if (end >= nums.length) {
        middle++
        if (middle >= nums.length){
          start++;
          middle = start + 1;
          end = middle + 1;
        }
        end = middle + 1;
        twoSum = nums[start] + nums[middle]
        target = 0 - twoSum;
        currentSums = [nums[start], nums[middle]];
      }
    }
  }
  
  return output;
}
// 
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0,0,0]));
// console.log(threeSum([0,0]));
console.log(threeSum([1,-1,-1,0]));


