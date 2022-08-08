// You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

// Return an array of names that will be given to the files.

// Example

// For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
// solution(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string names

// Guaranteed constraints:
// 5 ≤ names.length ≤ 1000,
// 1 ≤ names[i].length ≤ 15.

// [output] array.string

function solution(names) {
  let c = 1;
  let ni = "";
  for (var i = 0; i <= names.length; i++) {
    n = names.slice(0, i);
    ni = names[i];
    while (n.includes(names[i])) {
      names[i] = ni + "(" + c.toString() + ")";
      c++;
    }
    c = 1;
  }
  return names;
}

const names = ["doc", "doc", "image", "doc(1)", "doc"]; // -> ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"]

console.log(solution(names));
