function solution(n) {
  //   let digitsArr = n.split("");
  let digitsArr = Array.from(n.toString()).map(Number);

  for (let i = 0; i < digitsArr.length; i++) {
    if (digitsArr[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}

const input = 248622;
const input2 = 64386;

console.log(solution(input));
console.log(solution(input2));
