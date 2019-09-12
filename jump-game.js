// Given an array of non-negative integers, you are initially positioned at the first index of the array.
// 
// Each element in the array represents your maximum jump length at that position.
// 
// Determine if you are able to reach the last index.
// 
// Example 1:
// 
// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:
// 
// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.


const jumpGame = (nums) => {
  if (nums.length === 1){
    return true;
  } else {
    if (nums.length === 0){
      return false;
    }
  }
  
  let target = 1;
  let isReachable = false
  
  for (let i=0; i < (nums.length - 1); i++){
    // console.log(nums[nums.length - (i+2)]);
    // console.log({target});
    // console.log({isReachable});
    if (nums[nums.length - (i+2)] >= target){
      isReachable = true;
      target = 1;
    } else {
      isReachable = false;
      target++;
    }
  }
  return isReachable;
}

// 
// console.log(jumpGame([2,3,1,1,4]));
// console.log(jumpGame([3,2,1,0,4]));
console.log(jumpGame([1,2,0,1]));
