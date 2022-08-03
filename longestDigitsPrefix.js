// Given a string, output its longest prefix which contains only digits.

// Example

// For inputString = "123aa1", the output should be
// solution(inputString) = "123".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 100.

// [output] string

function solution(inputString) {
  let prefix = "";
  let firstNAN = [];

  for (let i = 0; i < inputString.length; i++) {
    // if (inputString[i])
    if (/^\d$/.test(inputString[i]) && firstNAN.length < 1) {
      prefix += inputString[i];
    } else {
      firstNAN.push(inputString[i]);
    }
  }
  return prefix;
}

input = "123aa1";

console.log(solution(input));
