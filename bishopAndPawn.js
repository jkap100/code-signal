function solution(bishop, pawn) {
  let board = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  let bishopX = board[bishop[0]];
  let bishopY = parseInt([bishop[1]]);

  let pawnX = board[pawn[0]];
  let pawnY = parseInt([pawn[1]]);

  console.log(bishopX);
  console.log(bishopY);
  if (
    bishopX + bishopY === pawnY + pawnX ||
    bishopX + pawnY === bishopY + pawnX
  ) {
    return true;
  }
  return false;
}

const bishop = "a1";
const pawn = "c3";

const bishop1 = "h1";
const pawn1 = "h3";

console.log(solution(bishop, pawn));
console.log(solution(bishop1, pawn1));
