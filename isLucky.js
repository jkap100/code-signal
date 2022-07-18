function solution(n) {
  let arr = Array.from(String(n));

  first = [];
  second = [];

  totalFirst = 0;
  totalSecond = 0;

  for (let i = 0; i < arr.length / 2; i++) {
    first.push(parseInt(arr[i]));
  }

  for (let i = arr.length - 1; i > arr.length / 2 - 1; i--) {
    second.push(parseInt(arr[i]));
  }

  console.log(arr);
  console.log(first);
  console.log(second);

  totalFirst = first.reduce((a, b) => a + b, 0);
  totalSecond = second.reduce((a, b) => a + b, 0);

  console.log(totalFirst);
  console.log(totalSecond);

  return totalFirst === totalSecond;
}

const input1 = 1230;
const input2 = 239017;

console.log(solution(input1));
console.log(solution(input2));
