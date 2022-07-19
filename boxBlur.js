// function solution(image) {
//   //will always start at the same place
//   let x = 1;
//   let y = 1;
//   let returnBox = [];

//   while (x + 1 <= image.length - 1) {
//     let newRow = makeRow(image, x, y);
//     returnBox.push(newRow);
//     x++;
//   }
//   return returnBox;
// }

// //Helper Functions
// function makeRow(image, x, y) {
//   let row = [];

//   while (y + 1 <= image[0].length - 1) {
//     let focus = constructFocus(image, x, y);
//     let pixel = sumBlock(focus);
//     row.push(pixel);
//     y++;
//   }
//   return row;
// }

// function constructFocus(image, x, y) {
//   let r1 = x - 1;
//   let r2 = x;
//   let r3 = x + 1;

//   let c1 = y - 1;
//   let c2 = y;
//   let c3 = y + 1;

//   let imageInternal = [];

//   let innerOne = [];
//   innerOne.push(image[r1][c1]);
//   innerOne.push(image[r1][c2]);
//   innerOne.push(image[r1][c3]);

//   imageInternal.push(innerOne);

//   let innerTwo = [];
//   innerTwo.push(image[r2][c1]);
//   innerTwo.push(image[r2][c2]);
//   innerTwo.push(image[r2][c3]);

//   imageInternal.push(innerTwo);

//   let innerThree = [];
//   innerThree.push(image[r3][c1]);
//   innerThree.push(image[r3][c2]);
//   innerThree.push(image[r3][c3]);

//   imageInternal.push(innerThree);

//   return imageInternal;
// }

// function sumBlock(frame) {
//   let rowOne = frame[0].reduce((total, num) => {
//     return total + num;
//   });

//   let rowTwo = frame[1].reduce((total, num) => {
//     return total + num;
//   });

//   let rowThree = frame[2].reduce((total, num) => {
//     return total + num;
//   });

//   let sumVal = rowOne + rowTwo + rowThree;

//   let numPixels = 9;

//   return Math.floor(sumVal / numPixels);
// }

function solution(image) {
  let imageArray = [];

  for (let y = 0; y < image.length - 2; y++) {
    let line = [];
    for (let x = 0; x < image.length - 2; x++) {
      let sum = 0;
      //   let count = 0;
      for (let a = y; a < y + 3; a++) {
        for (let b = x; b < x + 3; b++) {
          sum += image[a][b];
          //   count++;
        }
      }
      line.push(Math.floor(sum / 9));
    }
    imageArray.push(line);
  }
  return imageArray;
}

const input = [
  //expecting 1
  [1, 1, 1],
  [1, 7, 1],
  [1, 1, 1],
];

const input2 = [
  //expecting [[5,4],
  //[4,4]]
  [7, 4, 0, 1],
  [5, 6, 2, 2],
  [6, 10, 7, 8],
  [1, 4, 2, 0],
];

console.log(solution(input));
console.log(solution(input2));
