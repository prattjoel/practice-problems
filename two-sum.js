/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

// function twoSum(arr, n) {
//   const store = {};
// 
//   for (let i=0; i < arr.length; i++){
//     const diff = n - arr[i];
//     console.log({diff});
//     if (store[diff]){
//       return true
//     } else {
//       store[arr[i]] = true;
//     }
//   }
//   return false;
// }

// returning indices of values that equal n
function twoSum(arr, n) {
  const store = {};
  const output = [];
  
  for (let i=0; i < arr.length; i++){
    const diff = n - arr[i];
    if (store[diff] !== undefined){
      output.push(store[diff]);
      output.push(i);
      return output;
    } else {
      store[arr[i]] = i;
    }
  }
  return [];
}

const array = [3, 4, 5, 8, 10];
console.log(twoSum(array, 7));
console.log(twoSum(array, 13));
console.log(twoSum(array, 18));



module.exports = twoSum;
