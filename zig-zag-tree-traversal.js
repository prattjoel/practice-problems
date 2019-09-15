
class Tree {
  constructor(value) {
    this.right = null;
    this.left = null;
    this.val = value;
  }
}



const zigZag = (tree) => {
  
  if (!tree){
    return [];
  }
  
  let isValid = true;
  const output = [[tree.val]];
  let prevNodes = [tree];
  let currNodes = [];
  let reverseOrder = true;
  
  while (isValid){
    isValid = false;
    const reversed = [];
    for (let i = 0; i < prevNodes.length; i++){
      
      if (prevNodes[i] !== null){
        if (reverseOrder){
          if (prevNodes[i].right){
            currNodes.push(prevNodes[i].right)
            reversed.unshift(prevNodes[i].right)
          }
          if (prevNodes[i].left){
            currNodes.push(prevNodes[i].left)
            reversed.unshift(prevNodes[i].left)
          }
          
        } else {
          if (prevNodes[i].left){
            currNodes.push(prevNodes[i].left)
            reversed.unshift(prevNodes[i].left)
          }
          if (prevNodes[i].right){
            currNodes.push(prevNodes[i].right)
            reversed.unshift(prevNodes[i].right)
          }
        }
        isValid = true;
      }
    }
    // console.log('curr', currNodes);
    // console.log('reversed', reversed)
    // console.log(reverseOrder);
    
    if (isValid && currNodes.length > 0) {
      output.push(currNodes.map((node) => {
        if (node !== null){
          return node.val;
        } 
        return node
      }));
    }
    prevNodes = reversed;
    currNodes = [];
    reverseOrder = !reverseOrder;
  }
  
  return output
}

const newTree = new Tree(3);
newTree.left = new Tree(9);
newTree.right = new Tree(20);
newTree.right.left = new Tree(15);
newTree.right.right = new Tree(7);

const newTreeTwo = new Tree(1);
newTreeTwo.left = new Tree(2);
newTreeTwo.right = new Tree(3);
newTreeTwo.left.left = new Tree(4);
newTreeTwo.right.right = new Tree(5);

const newTreeThree = new Tree(0);
newTreeThree.left = new Tree(2);
newTreeThree.right = new Tree(4);
newTreeThree.left.left = new Tree(1);
newTreeThree.left.left.left = new Tree(5);
newTreeThree.left.left.right = new Tree(1);
newTreeThree.right.right = new Tree(-1);
newTreeThree.right.left = new Tree(3);
newTreeThree.right.left.right = new Tree(6);
newTreeThree.right.right.right = new Tree(8);





// console.log(zigZag(newTree));
// console.log(zigZag(newTreeTwo));
console.log(zigZag(newTreeThree));