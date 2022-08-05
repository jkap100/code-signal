// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example

// For n = 152, the output should be
// solution(n) = 52;
// For n = 1001, the output should be
// solution(n) = 101.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 10 ≤ n ≤ 106.

// [output] integer

function solution(n) {
  let max = 0;
  let arr = n.toString().split("");

  //   console.log(arr);

  //   let removed = arr.splice(0, 1);
  //   console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    let arr = n.toString().split("");
    removed = arr.splice(i, 1);
    // console.log(removed);
    // console.log(arr);
    let sum = arr.reduce((a, b) => a + b);
    // console.log(sum);
    if (max < sum) {
      max = sum;
    }
  }
  return Number(max);
}

const n = 152; //52
const n1 = 1001; //101

console.log(solution(n));
console.log(solution(n1));
