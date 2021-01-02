/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let start = 0; //starting pointer
  let end = height.length - 1; //ending pointer 
  let area = 0; //area
  
  while( start - end){
      let widthContainer = end - start; // width of container
      let heightContainer = Math.min(height[start], height[end]); // height of container
      area = Math.max(area, widthContainer * heightContainer); // Check which parameter is max and return this parameter than set to area variable
      (height[start] < height[end]) ? start++ : end--; // In the array which pointer have less height , than move to next (start = start->next) or (end = end->next)
  }
  return area;
};


/*Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 
Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
Notice that you may not slant the container. */

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
//  In this case, the max area of water (blue section) the container can contain is 49.


// Input: height = [4,3,2,1,4]
// Output: 16