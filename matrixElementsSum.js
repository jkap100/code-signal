function solution(matrix) {
  let total = 0;

  let banned = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        banned.push(j);
      } else if (banned.indexOf(j) === -1) {
        total += matrix[i][j];
      }
    }
  }
  return total;
}

const input = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

const input2 = [
  [1, 1, 1, 0],
  [0, 5, 0, 1],
  [2, 1, 3, 10],
];

console.log(solution(input));
console.log(solution(input2));
