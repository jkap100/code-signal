function solution(inputString) {
  return inputString
    .split("")
    .map((e) => {
      if (e === "z") {
        return "a";
      } else {
        return String.fromCharCode(e.charCodeAt() + 1);
      }
    })
    .join("");
}

const input = "crazy";

console.log(solution(input));
