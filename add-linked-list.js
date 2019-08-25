function Node (value){
  this.val = value;
  this.next = null;
  this.carry = false
}

function addLinkedList(l1, l2){
  if (l1===null && l2===null){
    return null
  }

  nextNode = addLinkedList(l1.next, l2.next);

  if (nextNode === null){
    return addNode((l1.val + l2.val), nextNode);
  } else if (nextNode.carry){
    return addNode((l1.val + l2.val + nextNode.val), nextNode.next);
  } else {
    return addNode((l1.val + l2.val), nextNode);
  }
}

function addNode (num, nextNode) {
  if (num > 9){
    const sumNode = new Node(1);
    sumNode.carry = true
    sumNode.next = new Node(num % 10);
    sumNode.next.next = nextNode
    return sumNode
  }
  const sumNode = new Node (num);
  sumNode.next = nextNode;
  return sumNode
}

const first = new Node(9);
first.next = new Node(9);
first.next.next = new Node(9);
// first.next.next.next = new Node(1);

const second = new Node(1);
second.next = new Node(0);
second.next.next = new Node(0);

console.log(addLinkedList(first, second));
