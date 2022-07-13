function solution(sequence) {
  let count = 0;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
      if (
        sequence[i] <= sequence[i - 2] &&
        sequence[i + 1] <= sequence[i - 1]
      ) {
        return false;
      }
    }
  }

  return count <= 1;
}

const input = [1, 3, 2, 1];
const input2 = [1, 3, 2];
const input3 = [1, 2, 1, 2];

console.log(solution(input));
console.log(solution(input2));
console.log(solution(input3));
