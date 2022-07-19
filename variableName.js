function solution(name) {
  return /^[a-z_]\w*$/i.test(name);
}

const input = "var_1__Int";
const input2 = "vqq-q";
const input3 = "2w2";

console.log(solution(input));
console.log(solution(input2));
console.log(solution(input3));
