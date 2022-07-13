function solution(inputString) {
  let reversed = inputString.toString().split("").reverse().join("");

  return inputString.toString() === reversed;
}
