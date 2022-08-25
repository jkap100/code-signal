// Given an array of integers, find the maximum possible sum you can get from one of its contiguous subarrays. The subarray from which this sum comes must contain at least 1 element.

// Example

// For inputArray = [-2, 2, 5, -11, 6], the output should be
// solution(inputArray) = 7.

// The contiguous subarray that gives the maximum possible sum is [2, 5], with a sum of 7.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// An array of integers.

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 105,
// -1000 ≤ inputArray[i] ≤ 1000.

// [output] integer

// The maximum possible sum of a subarray within inputArray.

function solution(inputArray) {
  let max = 0;
  let current = 0;

  if (inputArray[0] < 0) {
    current = inputArray[0];
    max = inputArray[0];
  }

  for (let i = 0; i < inputArray.length; i++) {
    let num = inputArray[i];

    max = Math.max(num, max + num);

    current = Math.max(current, max);
  }
  return current;
}

const input = [-2, 2, 5, -11, 6];
const input1 = [11, -2, 1, -4, 5, -3, 2, 2, 2];
const input2 = [-3, -2, -1, -4];

// console.log(solution(input));
// console.log(solution(input1));
console.log(solution(input2));
