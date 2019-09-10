// Given a binary tree, return the inorder traversal of its nodes' values.
// 
// Example:
// 
// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
// 
// Output: [1,3,2]
// Follow up: Recursive solution is trivial, could you do it iteratively?

function Node (value) {
  this.val = value;
  this.left = null;
  this.right = null; 
}

const inorderTraversal = (tree) => {
  if (tree === null){
    return [];
  }
  
  const output = inorderTraversal(tree.left);
  output.push(tree.val)
  return [...output, ...inorderTraversal(tree.right)]
}

// const traverse = (tree) => {
//   if (tree === null){
//     return [];
//   }
//   const output = traverse(tree.left);
//   ouput.push(tree.val)
//   return [...output, ...traverse(tree.right)]
// }

const binTree = new Node(2);
binTree.left = new Node(1);
binTree.right = new Node(3);

console.log(inorderTraversal(binTree))