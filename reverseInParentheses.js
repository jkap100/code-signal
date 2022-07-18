function solution(inputString) {
  while (inputString.includes("(")) {
    const endBracket = inputString.indexOf(")");
    const startBracket = inputString.lastIndexOf("(", endBracket);
    const reversedStr = inputString
      .slice(startBracket + 1, endBracket)
      .split("")
      .reverse()
      .join("");
    inputString =
      inputString.slice(0, startBracket) +
      reversedStr +
      inputString.slice(endBracket + 1);
  }

  return inputString;
}

const input = "(bar)";
const input2 = "foo(bar)baz";
const input3 = "foo(bar(baz))blim";

console.log(solution(input));
console.log(solution(input2));
console.log(solution(input3));
