// Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.
// 
// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
// 
// Example 1:
// 
// Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL
// Example 2:
// 
// Input: 2->1->3->5->6->4->7->NULL
// Output: 2->3->6->7->1->5->4->NULL
// Note:
// 
// The relative order inside both the even and odd groups should remain as it was in the input.
// The first node is considered odd, the second node even and so on ...

 function ListNode(val) {
     this.val = val;
     this.next = null;
}

const oddEvenLL = (list) => {
  
  if (!list || !list.next){
    return list;
  }
  const output = list;
  let odd = list;
  let even = list.next;
  const evenBegin = even;
  
  let curr = list.next.next;
  let isOdd = true;
  
  while (curr){
    if (isOdd){
      odd.next = curr;
      odd = odd.next;
      curr = curr.next;
      isOdd = !isOdd;
    } else {
      even.next = curr;
      even = even.next;
      curr = curr.next;
      isOdd = !isOdd;
    }
  }
  
  even.next = null;
  odd.next = evenBegin;
  return output
}

const node = new ListNode(1);
node.next = new ListNode(2)
node.next.next = new ListNode(3)
node.next.next.next = new ListNode(4)
node.next.next.next.next = new ListNode(5)

console.log(oddEvenLL(node));

