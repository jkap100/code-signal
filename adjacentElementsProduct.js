function solution(inputArray) {
  return Math.max(
    ...inputArray.slice(0, -1).map((n, i) => n * inputArray[i + 1])
  );
}

const input = [3, 6, -2, -5, 7, 3];
console.log(solution(input));
