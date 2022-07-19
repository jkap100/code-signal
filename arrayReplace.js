// function solution(inputArray, elemToReplace, substitutionElem) {
//   for (let i = 0; i < inputArray.length; i++) {
//     if (inputArray[i] === elemToReplace) {
//       inputArray[i] = substitutionElem;
//     }
//   }
//   return inputArray;
// }

function solution(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((i) => (i == elemToReplace ? substitutionElem : i));
}

console.log(solution([1, 2, 1], 1, 3));
