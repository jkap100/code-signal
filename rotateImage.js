// Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

// Example

// For

// a = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]
// the output should be

// solution(a) =
//     [[7, 4, 1],
//      [8, 5, 2],
//      [9, 6, 3]]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.integer a

// Guaranteed constraints:
// 1 ≤ a.length ≤ 100,
// a[i].length = a.length,
// 1 ≤ a[i][j] ≤ 104.

// [output] array.array.integer

function solution(a) {
  for (let r = 0; r < a.length; r++) {
    for (let c = r; c < a[0].length; c++) {
      [a[r][c], a[c][r]] = [a[c][r], a[r][c]];
    }
  }
  for (let r of a) {
    r.reverse();
  }
  return a;
}

const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//    [[7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3]]

console.log(solution(a));
