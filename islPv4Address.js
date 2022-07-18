function solution(inputString) {
  //   let numbers = parseInt(inputString.split("."));
  let numbers = inputString.split(".");
  console.log(numbers);

  if (numbers.length == 4) {
    return numbers.every(inRange);
  }
  return false;
}

function inRange(n) {
  if (
    n >= 0 &&
    n <= 255 &&
    n != "" &&
    !isNaN(n) &&
    !(n.length == 2 && n.charAt(0) == 0)
  ) {
    return true;
  }
  return false;
}

const input = "172.16.254.1";
const input2 = "172.316.254.1";
const input3 = ".254.255.0";
const input4 = "01.233.161.131";

console.log(solution(input));
console.log(solution(input2));
console.log(solution(input3));
console.log(solution(input4));
