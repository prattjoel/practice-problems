// /**
//  * Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
//

// recurse until finding the last value in each list

var addTwoNumbers = function(l1, l2) {

    if (l1 === null && l2 === null){
      return null
    }

    // const prevNode = addTwoNumbers(l1 ? l1.next : l1, l2 ? l2.next : l2)

    console.log({l1});
    console.log({l2});
    if (prevNode === null){
      const currNode = new ListNode(l1 ? l1.val : 0 + l2 ? l2.val : 0);
      return currNode;
    }

    const currVal = l1.val + l2.val;
    let currNode = new ListNode(currVal);
    let carry = 0
    if (prevNode.val > 9){
      carry = 1;
      prevNode.val = prevNode.val % 10
    }

    currNode.val = currNode.val + carry;
    currNode.next = prevNode;

    return currNode;


    // const node1 = getLastNode(l1);
    // const node2 = getLastNode(l2);


};

const getLastNode = (node) => {
  if (node === null){
    return null;
  }
  const nextNode = getLastNode(node.next);
  console.log({node});
  if (nextNode === null) {
    return node;
  }
  return nextNode;
  // if (!node1.next && !node2.next){
  //   return new ListNode(node1.val + node2.val)
  // }


  // let prevNode = getLastNode(node1.next ? node1.next : node1, node2.next ? node2.next : node2)

  // const currVal = node1.val + node2.val;
  // let currNode = new ListNode(currVal);
  // let carry = 0
  // if (prevNode.val > 9){
  //   carry = 1;
  //   prevNode.val = prevNode.val % 10
  // }
  //
  // currNode.val = currNode.val + carry;
  // currNode.next = prevNode;
  //
  // return currNode;

}

// const getLast = (node) => {
//   if (!node.next){
//     return node;
//   }
//
//   return getLast(node.next);
// }

let node = new ListNode(7);
node.next = new ListNode(2);
node.next.next = new ListNode(4);
node.next.next.next = new ListNode(3);

let node2 = new ListNode(5);
node2.next = new ListNode(6);
node2.next.next = new ListNode(4);

console.log(addTwoNumbers(node, node2));
