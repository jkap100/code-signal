function solution(picture) {
  const newPic = picture.map((e) => "*" + e + "*");

  let border = [];

  for (let i = 0; i < newPic[0].length; i++) {
    border.push("*");
  }
  border = border.join("");

  newPic.push(border);
  newPic.unshift(border);

  return newPic;
}

const input = ["abc", "dad"];

console.log(solution(input));
