// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

// Example

// For n = 3, the output should be

// solution(n) = [[1, 2, 3],
//                     [8, 9, 4],
//                     [7, 6, 5]]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Matrix size, a positive integer.

// Guaranteed constraints:
// 3 ≤ n ≤ 100.

// [output] array.array.integer

// class SpiralMatrix {
//   constructor(size) {
//     this.row = 0;
//     this.col = 0;
//     this.counter = 1;
//     this.size = size;
//     this.directions = [
//       [0, 1],
//       [1, 0],
//       [0, -1],
//       [-1, 0],
//     ]; // the first value represents a row and second value represents a column
//     this.directionIndex = 0;
//     this.matrix = [];

//     for (let i = 0; this.size; i++) {
//       this.matrix.push(new Array(this.size).fill(0));
//     }
//   }
//   fill() {
//     while (this.counter <= this.size ** ) {
//         let [dRow, dCol] = this.directions[this.directionIndex]
//         let [nextRow, nextCol] = [this.row + dRow, this.col +dCol]

//     if (this.matrix[this.row][this.col]===0){
//         this.matrix[this.row][this.col] = this.counter
//         this.counter++
//     }

//     if (this.checkNextCoord(nextRow, nextCol)){

//     }
//     }

//   }
//   checkNextCoord(nextRow, nextCol) {

//   }

//   changeDirection(){
//     this.directionIndex++
//     if (this.directionIndex === this.directions.length) {
//         this.directionIndex = 0
//     }
//   }
// }

function solution(n) {
  let result = Array(n * n)
    .fill(null)
    .map((el, i) => i + 1);
  let m = [];
  let i = 0;
  while (res.length) {
    m.reverse();
    m = m.length ? m[0].map((col, i) => m.map((row) => row[i])) : m;
    m.unshift(res.splice(-(Math.floor(i / 2) + 1)));
    i++;
  }
  return m;
}

const n = 3; //->
//[[1, 2, 3],
//[8, 9, 4],
//[7, 6, 5]]

console.log(solution(n));
