// After recently joining Instacart's beta testing developer group, you decide to experiment with their new API. You know that the API returns item-specific display-ready strings like 10.0% higher than in-store or 5.0% lower than in-store that inform users when the price of an item is different from the one in-store. But you want to extend this functionality by giving people a better sense of how much more they will be paying for their entire shopping cart.

// Your app lets a user decide the total amount x they are willing to pay via Instacart over in-store prices. This you call their price sensitivity.

// Your job is to determine whether a given customer will be willing to pay for the given items in their cart based on their stated price sensitivity x.

// Example

// For
// prices = [110, 95, 70],

// notes = ["10.0% higher than in-store",
//          "5.0% lower than in-store",
//          "Same as in-store"]
// and x = 5, the output should be
// solution(prices, notes, x) = true.

// In-store prices of the first and the second items are 100, and the price of the third item is 70, which means the customer is overpaying 10 - 5 + 0 = 5, which they are willing to do based on their price sensitivity.

// For
// prices = [48, 165],

// notes = ["20.00% lower than in-store",
//          "10.00% higher than in-store"]
// and x = 2, the output should be
// solution(prices, notes, x) = false.

// The in-store price of the first item is 60, and the second item is 150. The overpayment equals 15 - 12 = 3, which is too much for the customer to be willing to pay.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.float prices

// Positive numbers, representing prices of the items in the shopping cart.

// Guaranteed constraints:
// 1 ≤ prices.length ≤ 10,
// 20.0 ≤ prices[i] ≤ 35.0 · 103.

// [input] array.string notes

// Array of the same length as prices. For each valid i notes[i] has one of the following forms:

// "x% higher than in-store", which means that Instacart price of the ith item is x% higher than the local one;
// "x% lower than in-store", which means that Instacart price of the ith item is x% lower than the local one;
// "Same as in-store", which means that the ith item costs the same in Instacart and in the local store,
// where x is a positive float number with the decimal point and at least one digit after it.

// function solution(prices, notes, x) {
//   let percents = [];

//   for (let i = 0; i < notes.length; i++) {
//     if (notes[i].charAt(0) === "S") {
//       percents.push(0);
//     } else {
//       let p = notes[i].split("%");
//       if (p[1].charAt(1) === "h") {
//         // console.log(prices[i]);
//         // console.log(parseInt(p[0]) / 100 + 1);

//         // console.log(a / b);

//         // console.log(prices[i] / Number(p[0]));
//         percents.push(prices[i] - prices[i] / (parseFloat(p[0]) / 100 + 1));
//       } else {
//         // console.log(1 - p[0] / 100);
//         percents.push(prices[i] - prices[i] / (1 - p[0] / 100));
//       }
//       //   console.log(Number(p[0]) / 100 + 1);
//     }
//   }

//   console.log(percents);

//   let total = percents.reduce((a, b) => a + b);
//   let inStore = prices.reduce((a, b) => a + b);

//   console.log(inStore);
//   console.log(total);
//   //   let sum = total.reduce((a, b) => a + b);
//   return total - inStore > x ? false : true;
// }

function solution(prices, notes, x) {
  const difference = prices.reduce((sum, currentPrice, index) => {
    const percentageChange = parsePercentageFromNote(notes[index]);
    const originalPrice = reversePercentage(currentPrice, percentageChange);
    // difference between the prices
    return (sum = sum + currentPrice - originalPrice);
  }, 0);
  return difference.toPrecision(5) <= x;
}

// reverse percentage implementation
function reversePercentage(currentPrice, percentageChange) {
  // (1) Work out the current price as a percentage of the original price
  const percentageFromOriginalPrice = 100 + percentageChange;
  // (2) Find 1% by dividing the current price
  const onePercent = currentPrice / percentageFromOriginalPrice;
  // (3) Multiply this 1% by 100 to find the original price
  return onePercent * 100;
}

// get the percentage from the text note
function parsePercentageFromNote(note) {
  const tokens = note.split(" ");
  if (tokens[0] === "Same") {
    return 0;
  }
  const multipier = tokens[1] === "higher" ? +1 : -1;
  return multipier * parseFloat(tokens[0]);
}

// const prices = [110, 95, 70];
// const notes = [
//   "10.0% higher than in-store",
//   "5.0% lower than in-store",
//   "Same as in-store",
// ];
// const x = 5;

const prices = [40, 40, 40, 40];
const notes = [
  "0.001% higher than in-store",
  "0.0% lower than in-store",
  "0.0% higher than in-store",
  "0.0% lower than in-store",
];
const x = 0;

console.log(solution(prices, notes, x));
