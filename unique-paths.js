// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
// 
// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
// 
// How many possible unique paths are there?

// Example 1:
// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right
// 
//Example 2:
// Input: m = 7, n = 3
// Output: 28

const uniquePaths = (row, col) => {

  const grid = [];
  for (let i = 0; i < row; i++){
    const inner = [];
    for (let j = 0; j < col; j++){
      inner.push(0);
    }
    grid.push(inner)
  }
  return pathFinder(0, 0, grid)
}

const pathFinder = (row, col, paths) => {

  if (row === paths.length-1 && col === paths[0].length-1){
    return 1
  }
  if (row === paths.length-1){
    return pathFinder(row, col+1, paths)
  }
  if (col === paths[0].length-1){
    return pathFinder(row+1, col, paths)
  }
  if (paths[row][col] === 0){
    return paths[row][col] = pathFinder(row+1, col, paths) + pathFinder(row, col+1, paths)
  }
  return paths[row][col]
  
}

console.log(uniquePaths(3,2));
console.log(uniquePaths(7,3));