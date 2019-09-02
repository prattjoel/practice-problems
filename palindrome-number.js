// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
// 
// Example 1:
// 
// Input: 121
// Output: true
// Example 2:
// 
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
// 
// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Follow up:
// 
// Coud you solve it without converting the integer to a string?

const palNum = (num) => {
  
  if (num < 0 || num % 10 === 0 && num !=0){
    return false;
  }

  let newNum = num;
  let revertedNum = 0;
  
  while (newNum > revertedNum){
    revertedNum = (revertedNum * 10) + newNum % 10;
    newNum = Math.floor(newNum/10);

  }
  return (revertedNum === newNum || newNum === Math.floor(revertedNum/10))
}

// const palNum = (num) => {
//   const numStr = num.toString();
// 
//   for (let i=0; i < numStr.length; i++){
//     console.log('start: ', numStr[i]);
//     console.log('end: ', numStr[numStr.length - (i + 1)]);
//     console.log('test: ', !(numStr[i] === numStr[numStr.length - (i + 1)]));
//     if (!(numStr[i] === numStr[numStr.length - (i + 1)])){
//       console.log('false');
//       return false;
//     }
//   }
//   return true
// }


console.log(palNum(21120));
console.log(palNum(1221));
console.log(palNum(121));
console.log(palNum(-121));
console.log(palNum(10));
console.log(palNum(1));