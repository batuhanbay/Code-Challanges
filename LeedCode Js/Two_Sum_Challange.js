/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  let storage={};
  for(let [index,num] of nums.entries()){
      if(storage[num] !== undefined) return [storage[num],index];
      storage[target-num] = index;
  }
};

// nums = [2,7,11,15] && target= 9

// 1st iteration:
// index = 0
// num = 2
// first if check is undefined so  storage[target-num] = index is going to be implemented. if ( undefined !== undefined) 
// storage [9-2] = 0 --> key of storage which is 7, set to index
// storage{
//  '7':0
//}
// 2nd iteration:
// index = 1
// num = 7
// first if check is  storage[7] is defined so if statement is going to be implemented
// storage[num] --> 0
// index = 1
// return [0,1]
//  Time complexity : O(n)