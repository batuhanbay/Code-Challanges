/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let flag = 0;
if(nums.indexOf(target) < 0){
    for(let i = 0; i < nums.length; i++){
        if(target < nums[i]){
            return i;
        }
    }
    if(flag == 0){
        return nums.length;
    }
}else{
    return nums.indexOf(target)
}
};

/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2
 
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
Example 4:

Input: nums = [1,3,5,6], target = 0
Output: 0
Example 5:

Input: nums = [1], target = 0
Output: 0


*/