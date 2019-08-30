// Write a function to find the longest common prefix string amongst an array of strings.
// 
// If there is no common prefix, return an empty string "".
// 
// Example 1:
// 
// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// 
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:
// 
// All given inputs are in lowercase letters a-z.

const longestPrefix = (arr) => {
  let commPref = '';
  let charIndex = 0;
  let end = 0;
  
  if (arr.length === 0) {
    return commPref
  }
  
  while (charIndex < arr[0].length) {
  
    if (arr[end] === undefined){
      commPref += arr[0][charIndex];
      end = 1;
      charIndex++;
    } else if ( arr[0][charIndex] === arr[end][charIndex]){
      end++
    } else {
      return commPref;
    }
  }
  return commPref;
}


console.log(longestPrefix(["flower","flow","flight"]));
console.log(longestPrefix(["dog","racecar","car"]));
