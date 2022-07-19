function solution(inputArray) {
  for (let i = 1; ; i++) {
    if (inputArray.every((e) => e % i)) return i;
  }
}

const input = [5, 3, 6, 7, 9];

console.log(solution(input));
