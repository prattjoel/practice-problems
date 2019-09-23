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

const setZeroes = (matrix) => {

const rowTracker = {};
const colTracker = {};
  
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      if (matrix[i][j] === 0){
        if (!rowTracker[i]){
          rowTracker[i] = true;
        }
        if (!colTracker[j]){
          colTracker[j] = true;
        }
      }
    }
  }
  // console.log(rowTracker);
  // console.log(colTracker);
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
        // if (matrix[i][j] === 0) {
        //   continue;
        // }
        if ((matrix[i][j] !== 0 ) && (rowTracker[i] || colTracker[j])){
          matrix[i][j] = 0;
        }
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

const m3 = [[0,0,0,5],[4,3,1,4],[0,1,1,4],[1,2,1,3],[0,0,1,1]];

console.log(setZeroes(m1));
// Output: 
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]

console.log(setZeroes(m2));
// Output: 
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]

console.log(setZeroes(m3));

//[[0,0,0,0],[0,0,0,4],[0,0,0,0],[0,0,0,3],[0,0,0,0]]
