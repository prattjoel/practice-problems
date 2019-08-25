// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */

function ListNode(val) {
  this.val = val;
  this.next = null
}

var addTwoNumbers = function(l1, l2) {

  let combinedList = null;
  let currNode = null
  let carry = 0;

  while (l1 || l2){
    //let newVal = l1.val + l2.val > 9 ? l1.val + l2.val % 10 : l1.val + l2.val;
    let newVal = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry

    if (newVal > 9 ) {
      newVal = newVal % 10;
      carry = 1;
    } else {
      carry = 0
    }

    if (combinedList){
      const newNode = new ListNode(newVal);
      currNode.next = newNode;
      currNode = newNode;
    } else {
      newNode = new ListNode(newVal);
      combinedList = newNode;
      currNode = newNode;
    }

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  if (carry){
    currNode.next = new ListNode(carry);
  }
  return combinedList;
};


let node = new ListNode(2);
node.next = new ListNode(4);
node.next.next = new ListNode(3);

let node2 = new ListNode(5);
node2.next = new ListNode(6);
node2.next.next = new ListNode(4);

console.log(addTwoNumbers(node, node2));
