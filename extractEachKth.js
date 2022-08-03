// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
// solution(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Guaranteed constraints:
// 5 ≤ inputArray.length ≤ 15,
// -20 ≤ inputArray[i] ≤ 20.

// [input] integer k

// Guaranteed constraints:
// 1 ≤ k ≤ 10.

// [output] array.integer

// inputArray without elements k - 1, 2k - 1, 3k - 1 etc.

function solution(inputArray, k) {
  let result = inputArray.filter((e, i) => {
    return (i + 1) % k !== 0;
  });
  return result;
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //-> [1, 2, 4, 5, 7, 8, 10]
const k = 3;

const inputArray1 = [1, 1, 1, 1, 1]; //->[]
const k1 = 1;

const inputArray2 = [1, 2, 1, 2, 1, 2, 1, 2]; //->[1,1,1,1]
const k2 = 2;

console.log(solution(inputArray, k));
console.log(solution(inputArray1, k1));
console.log(solution(inputArray2, k2));
