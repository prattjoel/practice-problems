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
  
  const sortedNums = nums.sort((a,b) => a - b);
  const output = []  
  
  for (let i = 0; i < nums.length - 2; i++){
    if (i !== 0 && sortedNums[i] === sortedNums[i-1]){
      continue;
    }
    
    if (sortedNums[i] > 0){
      break;
    }
    
    let start = i + 1;
    let end = sortedNums.length-1;
    
    while (start < end) {
      const sum = sortedNums[i] + sortedNums[start] + sortedNums[end];
      if ( sum === 0){
        output.push([sortedNums[i], sortedNums[start], sortedNums[end]]);
        while (sortedNums[start] === sortedNums[start + 1]){
          start++
        }
        start++;
        while (sortedNums[end] === sortedNums[end - 1]){
          end--
        }
        end--
        
      } else if (sum < 0) {
        while (sortedNums[start] === sortedNums[start + 1]){
          start++
        }
        start++;
      } else {
        while (sortedNums[end] === sortedNums[end - 1]){
          end--
        }
        end--
      }
    }
  }
  return output;
}
// // 
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0,0,0]));
// console.log(threeSum([0,0]));
// console.log(threeSum([1,-1,-1,0]));
// console.log(threeSum([0,0,0,0]));
// console.log(threeSum([-2,0,1,1,2]));
// console.log(threeSum([-5,1,-3,-1,-4,-2,4,-1,-1]));

console.log(threeSum([-2,0,0,2,2]));



