// function solution(a) {
//   let arr = a;
//   let index = 0;

//   //filter array to remove trees and sort by height
//   arr = arr
//     .filter((e) => {
//       if (e != -1) {
//         return e;
//       }
//     })
//     .sort((a, b) => {
//       return a - b;
//     });

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] != -1) {
//       a[i] = arr[index];
//       index++;
//     }
//   }
//   return a;
// }

function solution(a) {
  const people = a.filter((e) => e != -1).sort((a, b) => a - b);

  return a.map((value) => (value === -1 ? -1 : people.shift()));
}

const input = [-1, 150, 190, 170, -1, -1, 160, 180];

console.log(solution(input));
