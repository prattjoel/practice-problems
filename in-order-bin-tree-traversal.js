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

class Stack {
  constructor() {
    this.store = []
  }
  push = (val) => {
    this.store.push(val)
  }
  pop = () => {
    if (this.store.length > 0){
      return this.store.pop();
    }
  }
  length = () => {
    return this.store.length;
  }
}

const inorderTraversal = (tree) => {
  const output = [];
  const stack = new Stack();
  
  while (tree || stack.length() > 0){
    if (!tree) {
      tree = stack.pop();
      output.push(tree.val)
      tree = tree.right;
    } else {
      stack.push(tree);
      tree = tree.left;
    }
  }
  
  return output;
}


const binTree = new Node(2);
binTree.left = new Node(1);
binTree.right = new Node(3);

console.log(inorderTraversal(binTree))