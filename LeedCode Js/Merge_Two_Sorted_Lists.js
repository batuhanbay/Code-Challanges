/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(-1); // dummy node list
  let head = dummy; // head variable point to head of dummy node list
  
  while(l1 !== null && l2 !== null){ //check if any node list is null
      
   if(l1.val < l2.val) { // check if current value of  l1 node list less than current value of l2 nod list. 
       dummy.next = l1 // append current l1 node to dummy list as next node
       l1 = l1.next; // iterate the l1 node list
   }else{ 
       dummy.next = l2; // append current l2 node to dummy list as next node
       l2 = l2.next; // iterate the l2 node list 
   }
      dummy = dummy.next; // iterate the dummy node list 
  }
  if(l1 !== null){ // if l1 has got still nodes 
      dummy.next = l1; // link these l1 nodes as next node of dummy node list
  }else{
      dummy.next = l2; // if l1 has got still nodes, link these l2 nodes as next node of dummy node list
  }

  return head.next;
};

/*
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.


Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: l1 = [], l2 = []
Output: []


Input: l1 = [], l2 = [0]
Output: [0]
*/