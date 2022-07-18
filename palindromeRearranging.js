// function solution(inputString) {
//   if (inputString.length === 1) {
//     return true;
//   }

//   let count = Array(256).fill(0);
//   let odd = 0;

//   for (let i = 0; i < inputString.length; i++) {
//     count[inputString[i].charCodeAt()]++;
//   }

//   for (let i = 0; i < 256; i++) {
//     if ((count[i] & 1) == 1) {
//       odd++;
//     }
//     if (odd > 1) {
//       return false;
//     }
//   }
//   return true;
// }

function solution(inputString) {
  let characters = inputString.split("");

  let letterObj = {};
  let count = 0;

  for (let i = 0; i < characters.length; i++) {
    if (!letterObj.hasOwnProperty(characters[i])) {
      letterObj[characters[i]] = 1;
    } else {
      letterObj[characters[i]]++;
    }
  }
  for (val in letterObj) {
    if (letterObj[val] % 2 != 0) {
      count++;
    }
  }
  return count > 1 ? false : true;
}

const input = "aabb";
const input2 = "zaa";

console.log(solution(input));
console.log(solution(input2));
