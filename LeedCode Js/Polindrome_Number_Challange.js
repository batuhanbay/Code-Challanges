/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let result = false;
  (x < 0) ? result : result = (x === ReverseNumber(x)) ;
  
  return result;
};


let ReverseNumber = x => {
  let reversed = 0;
  while(x > 0) {
      reversed = (reversed * 10) + x % 10;
      x = Math.floor( x / 10);
  }
  return reversed
}

//Check if the given number is negative. If it is a negative number return false.
//If it is not a negative number, call the reverseNumber which takes a number as a parameter.
//In the function reversed is represtenting a number which is reversed number. At beggining has been sent to 0
//Through while loop implement the process until number is greater than 0.
// Process is that take mod of number by 10 and get a last digit of number than  add this digit the reversed number which multiply by 10( bc of decimal system). 
//Last step is retur the reversed number.


//1st iteration: x = 454 ? x > 0 --> Yes
// reversed = (0 * 10) + 454 % 10 ( get last digit of number = 4)  = 0 + 4  -->reversed = 4
// x = 454 / 10 = 45
//2nd iteration: x = 45 ? x > 0 -->Yes
// reversed = (4 * 10) + 45 % 10 ( get last digit of number = 5) = 40 + 5   -->reversed = 45
// x = 45 / 10 = 4
//3rd iteration: x = 4 ? x > 0 --> Yes
// reversed = (45 * 10) + 4 % 10 ( get last digit of number = 4) = 450 + 4  --reversed = 454
// x = 4 / 10  = 0
//4th iteration: x = 0 ? x > 0 --->No
// return reversed (454)