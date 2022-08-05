// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

// Example

// For text = "Ready, steady, go!", the output should be
// solution(text) = "steady".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string text

// Guaranteed constraints:
// 4 ≤ text.length ≤ 50.

// [output] string

// The longest word from text. It's guaranteed that there is a unique output.

// function solution(text) {
//   let max = "";
//   let arr = text.split(" ");

//   for (let i = 0; i < arr.length; i++) {
//     let word = arr[i].replace(/[^a-z0-9]/gi, "");

//     if (word.length > max.length) {
//       max = word;
//     }
//   }
//   return max;
// }

function solution(text) {
  let arr = text.match(/[a-z]+/gi);

  let sorted = arr.sort((a, b) => b.length - a.length);

  console.log(sorted);

  return sorted[0];
}

const input = "Ready, steady, go!"; //-> steady

console.log(solution(input));
