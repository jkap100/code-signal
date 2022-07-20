function solution(cell1, cell2) {
  let letters = "ABCDEFGH";
  cell1 = letters.indexOf(cell1[0]) + Number(cell1[1]);
  cell2 = letters.indexOf(cell2[0]) + Number(cell2[1]);

  return cell1 % 2 === cell2 % 2;
}

console.log(solution("A1", "C3"));
console.log(solution("A1", "H3"));
