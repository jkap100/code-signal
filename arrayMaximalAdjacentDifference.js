function solution(inputArray) {
  let maxDiff = 0;

  for (let i = 1; i < inputArray.length; i++) {
    if (Math.abs(inputArray[i] - inputArray[i - 1]) >= Math.abs(maxDiff)) {
      maxDiff = Math.abs(inputArray[i] - inputArray[i - 1]);
    }
    console.log(maxDiff);
  }
  return maxDiff;
}

const input = [2, 4, 1, 0];

console.log(solution(input));
