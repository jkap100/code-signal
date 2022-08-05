// CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.

// Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

// Example

// For inputString = "2 apples, 12 oranges", the output should be
// solution(inputString) = 14.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// Guaranteed constraints:
// 0 ≤ inputString.length ≤ 105.

// [output] integer

// function solution(inputString) {
//   const arr = inputString.split(" ");
//   const nums = [];

//   for (let i = 0; i < arr.length; i++) {
//     nums.push(Number(arr[i].replace(/\D/g, "")));
//   }
//   const total = nums.reduce((a, b) => a + b);

//   return total;
// }

function solution(inputString) {
  if (!inputString.match(/[\d]+/g)) {
    return 0;
  }
  const nums = inputString.match(/[\d]+/g);
  const total = nums.reduce((a, b) => Number(a) + Number(b));

  return Number(total);
}

const input = "2 apples, 12 oranges"; //14

console.log(solution(input));
