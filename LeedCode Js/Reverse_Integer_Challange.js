/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  if(x < 0) return -1 * reverse(-x);
  const solution = Number(String(x).split("").reverse().join(""));
  return (solution > 2**31 -1) ? 0 : solution;
};

//Check if the number is negative, If it is a negative number , call the reverse funtion with parameter multiply by -1 than multiply -1 further.   Because of even if the number reversed, we want to have negative reversed number.
// Than convert integer value to string  123 -> "123"
// After that Split the string ( separator is "") and get an array --> ["1", "2", "3"]
// Following step is reverse the elements of array by using reverse function -->["3","2","1"]
// Last step is join all the element which was reversed previous step. join function returns a new string by concatenating all of the elements in an array  --> ["321"] than covert this string to integer --> 321
// Before return the solution check if solution is within the 32-bit signed integer range: [−231,  231 − 1]. 