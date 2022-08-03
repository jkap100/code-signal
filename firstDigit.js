// Find the leftmost digit that occurs in a given string.

// Example

// For inputString = "var_1__Int", the output should be
// solution(inputString) = '1';
// For inputString = "q2q-q", the output should be
// solution(inputString) = '2';
// For inputString = "0ss", the output should be
// solution(inputString) = '0'.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string containing at least one digit.

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 10.

// [output] char

function solution(inputString) {
  let index = inputString.search(/[0-9]/);

  return inputString[index];
}

const input = "var_1__Int";
const input1 = "q2q-q";
const input2 = "0ss";

console.log(solution(input));
console.log(solution(input1));
console.log(solution(input2));
