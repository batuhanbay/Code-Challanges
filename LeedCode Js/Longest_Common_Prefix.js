/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

  let prefix = "";
  if(strs.length === 0) return prefix; //check if the strs array is empty ,if it is return empty string
  
  for(let i = 0 ; i <strs[0].length ; i++){ // loop through the letter of word which has index 0 in the strs array
      const character = strs[0][i]; // get the  letter of the that world and itarate according to outer loop
      for( let j = 0 ; j < strs.length ; j++){ // loop through the words in the strs array
          if(strs[j][i] !== character){ // check if the letter of word does not match according to inner and outer loop index with the first word's letter 
              return prefix; // return prefix
          }
      }
      prefix += character; // append the character to prefix string
  }
  return prefix;
};

/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".


Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/