// function solution(a) {
//   let sum1 = 0;
//   let sum2 = 0;

//   let alternatingSums = [];

//   for (let i = 0; i < a.length; i += 2) {
//     sum1 = sum1 + a[i];
//   }
//   alternatingSums.push(sum1);

//   for (let j = 1; j < a.length; j += 2) {
//     sum2 = sum2 + a[j];
//   }
//   alternatingSums.push(sum2);

//   return alternatingSums;
// }

function solution(a) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      sum1 += a[i];
    } else {
      sum2 += a[i];
    }
  }

  return [sum1, sum2];
}

const input = [50, 60, 60, 45, 70];

console.log(solution(input));
