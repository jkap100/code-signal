function solution(a, b) {
  if (a.toString() == b.toString()) {
    return true;
  }

  let c = [];
  let d = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      c.push(a[i]);
      d.push(b[i]);
    }
  }
  console.log(c);
  console.log(d);

  d = d.reverse();

  if (c.length === 2 && c.toString() == d.toString()) {
    return true;
  } else {
    return false;
  }
}

console.log(solution([1, 2, 3], [1, 2, 3]));
console.log(solution([1, 2, 3], [2, 1, 3]));
console.log(solution([1, 2, 2], [2, 1, 1]));
console.log(
  solution(
    [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
    [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]
  )
);
