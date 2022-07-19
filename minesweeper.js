function solution(matrix) {
  const board = [];
  for (let x = 0; x < matrix.length; x++) {
    board.push([]);
    for (let y = 0; y < matrix[0].length; y++) {
      //   console.log(matrix[x][y]);
      board[x][y] = 0;
      //  Above
      if (matrix[x - 1] != undefined) {
        if (matrix[x - 1][y]) {
          board[x][y]++;
        }
      }
      //Below
      if (matrix[x + 1] != undefined) {
        if (matrix[x + 1][y]) {
          board[x][y]++;
        }
      }
      //left
      if (matrix[x][y - 1] != undefined) {
        if (matrix[x][y - 1]) {
          board[x][y]++;
        }
      }
      //right
      if (matrix[x][y + 1] != undefined) {
        if (matrix[x][y + 1]) {
          board[x][y]++;
        }
      }
      //top left
      if (matrix[x - 1] != undefined) {
        if (matrix[x - 1][y - 1]) {
          board[x][y]++;
        }
      }
      //top right
      if (matrix[x - 1] != undefined) {
        if (matrix[x - 1][y + 1]) {
          board[x][y]++;
        }
      }
      //bottom left

      if (matrix[x + 1] != undefined) {
        if (matrix[x + 1][y - 1]) {
          board[x][y]++;
        }
      }
      //bottom right
      if (matrix[x + 1] != undefined) {
        if (matrix[x + 1][y + 1]) {
          board[x][y]++;
        }
      }
    }
  }
  return board;
}

const input = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
];

console.log(solution(input));
