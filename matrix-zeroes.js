// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.
// 
// Example 1:
// 
// Input: 
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// Output: 
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]
// Example 2:
// 
// Input: 
// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// Output: 
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]
// Follow up:
// 
// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

// Solution: using a cache

// const setZeroes = (matrix) => {
// 
// const rowTracker = {};
// const colTracker = {};
// 
//   for (let i = 0; i < matrix.length; i++){
//     for (let j = 0; j < matrix[i].length; j++){
//       if (matrix[i][j] === 0){
//         if (!rowTracker[i]){
//           rowTracker[i] = true;
//         }
//         if (!colTracker[j]){
//           colTracker[j] = true;
//         }
//       }
//     }
//   }
//   // console.log(rowTracker);
//   // console.log(colTracker);
//   for (let i = 0; i < matrix.length; i++){
//     for (let j = 0; j < matrix[i].length; j++){
//         // if (matrix[i][j] === 0) {
//         //   continue;
//         // }
//         if ((matrix[i][j] !== 0 ) && (rowTracker[i] || colTracker[j])){
//           matrix[i][j] = 0;
//         }
//       }
//     }
// 
//   return matrix;
// }

// Solution without cache:

const setZeroes = (matrix) => {
  let isColZero = false;
  // let isRowZero = false

  for (let i = 0; i < matrix.length; i++){
    if (matrix[i][0] === 0){
      console.log('colZero');
      isColZero = true;
    }
    for (let j = 1; j < matrix[i].length; j++){
      // if (matrix[0][j] === 0){
      //   console.log('rowZero');
      // 
      //   isRowZero = true;
      // }
      if (matrix[i][j] === 0){
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  
  // console.log(matrix);
  
  for (let i = 1; i < matrix.length; i++){
    for (let j = 1; j < matrix[i].length; j++){
      // console.log(matrix[i][0]);
      if (matrix[0][j] === 0 || matrix[i][0] === 0){
        matrix[i][j] = 0
      }
    }
  }
  
  // console.log(matrix);
  if (matrix[0][0] === 0){
    for (let i = 0; i < matrix[0].length; i++){
      matrix[0][i] = 0;
    }
  }
    // console.log('-----', isColZero);
  if (isColZero) {
    console.log('col');
    for (let j = 0; j < matrix.length; j++){
      matrix[j][0] = 0;
    }
  }
  return matrix;
}

const m1 = [
  [1,1,1],
  [1,0,1],
  [1,1,1]
]

const m2 = [
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]

const m4 = [[1],[0],[3]];

const m3 = [[0,0,0,5],[4,3,1,4],[0,1,1,4],[1,2,1,3],[0,0,1,1]];

const m5 = [[1,1,1],[0,1,2]]

// console.log(setZeroes(m1));
// Output: 
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]

// console.log(setZeroes(m2));
// Output: 
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]

// console.log(setZeroes(m3));

//[[0,0,0,0],[0,0,0,4],[0,0,0,0],[0,0,0,3],[0,0,0,0]]

// console.log(setZeroes(m4));
//[[0],[0],[0]]

// console.log(setZeroes(m5));

console.log(setZeroes([[1],[0]]));
