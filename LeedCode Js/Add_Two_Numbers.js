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
var addTwoNumbers = function(l1, l2) {
  
  //First pointer for tracking the l1 list
  let ptr1 = l1;
  
  //Second pointer for tracking the l2 list
  let ptr2  = l2;
  
  //dummy head
  let dummy = new ListNode(0);
  
  //Third pointer for tracking the curent list(result list)
  let current = dummy;
  
  //For carry
  let carry = 0;
  
  while(ptr1 !== null || ptr2 !== null){
      
      //get value of nodes respectively
      let num1 = (ptr1 !== null) ? ptr1.val : 0;
      let num2 = (ptr2 !== null) ? ptr2.val : 0;
      
      let sum = num1 + num2 + carry;
      
      //If sum greater than 10 , set the carry by diveding 10
       carry = Math.floor(sum / 10);
      
      //Add the sum of numbers to next list node
      current.next = new ListNode(sum % 10);
      
      //iterate the current pointer
      current = current.next;
      
      //iterate the ptr1 pointer
      if(ptr1 !== null){
          ptr1 = ptr1.next;
      }
      //iterate the ptr2 pointer
       if(ptr2 !== null){
          ptr2 = ptr2.next;
      }
      
  }
   //check if there is any carry end of the add operation if there is , add this carry as new node in the list
  if(carry > 0){
      current.next = new ListNode(1);
  }
  
  return dummy.next;
  
};

// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//     l1 = 2 -> 4 -> 3
//     l2 = 5 -> 6 -> 4
//   +
//  -----------------------
// output = 7 -> 0 -> 8 
