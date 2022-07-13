// function solution(n) {
//   let a = 1;

//   for (let i = 1; i < n; i++) {
//     a += 4 * i;
//   }
//   return a;
// }

function solution(n) {
  return 2 * n * (n - 1) + 1;
}

const n = 3;
console.log(solution(n));
