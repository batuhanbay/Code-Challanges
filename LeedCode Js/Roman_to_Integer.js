var romanToInt = function(s) {
  let romanNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let sum=0
  let prev=0
  for (let ch of s){
      let cur = romanNum[ch]
          sum += cur
      if (prev < cur) {
          sum -= 2*prev
      }
      prev = cur
  }
  return sum
};

// Input: s = "IV"
// Output: 4

// Input: s = "IX"
// Output: 9

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.