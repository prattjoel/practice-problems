// Given a 32-bit signed integer, reverse digits of an integer.
// 
// Example 1:
// 
// Input: 123
// Output: 321
// Example 2:
// 
// Input: -123
// Output: -321

// Example 3:
// 
// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers 
// within the 32-bit signed integer range: [−231,  231 − 1]. 
// For the purpose of this problem, 
// assume that your function returns 0 when the reversed integer overflows.
// 


// const reverseInteger = (integer) => {
//   const intString = integer.toString();
// //  console.log({intString});
//   const outputStr = intString.split('').reverse().join('');
// //  console.log({outputStr});
//   if (outputStr[outputStr.length-1] === '-'){
//     output = parseInt('-' + outputStr.slice(0, outputStr.length-1))
//     // console.log({output});
//     return (output >= Math.pow(-2, 31)) ? output : 0;
//   }
//   return parseInt(outputStr) <= (Math.pow(2, 31) - 1) ? outputStr : 0;
// }

const reverseInteger = (integer) => {
  const intStr = integer.toString();
  let outputStr = '';
  // const neg = intStr[0] === '-' ? '-' : null;
  
  for (let i=(intStr.length-1); i >= 0; i--){
    if (intStr[i] === '-'){
      outputStr = '-' + outputStr;
    } else {
      outputStr += intStr[i];
    }
  }
  
  // if (neg) outputStr = '-' + outputStr.slice(0, outputStr.length-1);
  
  return parseInt(outputStr) <= (Math.pow(2, 31) - 1) && parseInt(outputStr) >= Math.pow(-2, 31) ? parseInt(outputStr) : 0;
}


console.log(reverseInteger(123));
console.log(reverseInteger(-123));
console.log(reverseInteger(-129));
console.log(reverseInteger(129));

// 32 minutes

