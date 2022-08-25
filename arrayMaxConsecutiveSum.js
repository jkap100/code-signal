// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// Example

// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
// solution(inputArray, k) = 8.
// All possible sums of 2 consecutive elements are:

// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Array of positive integers.

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 105,
// 1 ≤ inputArray[i] ≤ 1000.

// [input] integer k

// An integer (not greater than the length of inputArray).

// Guaranteed constraints:
// 1 ≤ k ≤ inputArray.length.

// [output] integer

// The maximal possible sum.

function solution(inputArray, k) {
  let current = inputArray.slice(0, k).reduce((a, b) => a + b);
  let max = current;

  //   console.log(current);
  for (let i = 0; i < inputArray.length - k; i++) {
    current += inputArray[i + k] - inputArray[i];

    max = Math.max(max, current);
  }
  return max;
}

const input = [2, 3, 5, 1, 6]; //-> 8
const input1 = [-2, 2, 5, -11, 6]; //-> 7

const k = 2;

console.log(solution(input, k));
