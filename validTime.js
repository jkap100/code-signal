// Check if the given string is a correct time representation of the 24-hour clock.

// Example

// For time = "13:58", the output should be
// solution(time) = true;
// For time = "25:51", the output should be
// solution(time) = false;
// For time = "02:76", the output should be
// solution(time) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string time

// A string representing time in HH:MM format. It is guaranteed that the first two characters, as well as the last two characters, are digits.

// [output] boolean

// true if the given representation is correct, false otherwise.

// function solution(time) {
//   const nums = time.split(":");

//   //   if (Number(nums[0]) === 23 && Number(nums[1]) >= 0 && Number(nums[1]) <= 59)
//   //     return true;

//   if (
//     Number(nums[0]) >= 0 &&
//     Number(nums[0]) < 24 &&
//     Number(nums[1]) >= 0 &&
//     Number(nums[1] <= 59)
//   ) {
//     return true;
//   }
//   return false;
//   // console.log(nums);
// }

function solution(time) {
  return new Date("1900-01-01 " + time) != "Invalid Date" && time != "24:00";
}

const time = "13:58";
const time1 = "25:51";
const time2 = "02:76";
const time3 = "23:59";

console.log(solution(time));
console.log(solution(time1));
console.log(solution(time2));
console.log(solution(time3));
