// Given an array of integers, write a function that determines whether the array contains any duplicates. Your function should return true if any element appears at least twice in the array, and it should return false if every element is distinct.

// Example

// For a = [1, 2, 3, 1], the output should be
// solution(a) = true.

// There are two 1s in the given array.

// For a = [3, 1], the output should be
// solution(a) = false.

// The given array contains no duplicates.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// Guaranteed constraints:
// 0 ≤ a.length ≤ 105,
// -2 · 109 ≤ a[i] ≤ 2 · 109.

// [output] boolean

function solution(a) {
  let dupe = new Set(a);

  return dupe.size !== a.length;
}

const a = [1, 2, 3, 1];
const a1 = [3, 1];

console.log(solution(a));
console.log(solution(a1));
