function solution(statues) {
  statues.sort((a, b) => {
    return a - b;
  });

  let min = statues[0];
  let max = statues[statues.length - 1];
  let count = 0;

  for (let i = min; i < max; i++) {
    if (statues.indexOf(i) === -1) {
      count++;
    }
  }

  return count;
}

const input = [6, 2, 3, 8];
console.log(solution(input));
