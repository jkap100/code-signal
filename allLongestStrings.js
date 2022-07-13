function solution(inputArray) {
  let longest = 0;
  let longestArr = [];

  //Iterate through the input array to find longest length strings
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length >= longest) {
      longest = inputArray[i].length;
    }
  }

  //compare each element in input array to see if its equal to longest
  //push the longest strings into longestArr

  for (let j = 0; j < inputArray.length; j++) {
    if (inputArray[j].length === longest) {
      longestArr.push(inputArray[j]);
    }
  }
  return longestArr;
}

const input = ["aba", "aa", "ad", "vcd", "aba"];

console.log(solution(input));
