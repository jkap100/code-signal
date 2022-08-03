// Given a string, find the number of different characters in it.

// Example

// For s = "cabca", the output should be
// solution(s) = 3.

// There are 3 different characters a, b and c.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s

// A string of lowercase English letters.

// Guaranteed constraints:
// 3 ≤ s.length ≤ 1000.

// [output] integer

function solution(s) {
  arr = s.split("");
  return arr.filter((x, i, a) => a.indexOf(x) == i).length;
}

const s = "cabca"; //-> 3

console.log(solution(s));
