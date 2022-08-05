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

function solution(time) {
  const nums = time.split(":");

  console.log(time);
}

const time = "13:58";
const time1 = "25:51";
const time2 = "02:76";

console.log(solution(time));
