// An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").

// The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.

// Given a valid email address, find its domain part.

// Example

// For address = "prettyandsimple@example.com", the output should be
// solution(address) = "example.com";
// For address = "fully-qualified-domain@codesignal.com", the output should be
// solution(address) = "codesignal.com".
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string address

// Guaranteed constraints:
// 10 ≤ address.length ≤ 50.

// [output] string

// [JavaScript] Syntax Tips

function solution(address) {
  const index = address.lastIndexOf("@");

  return address.slice(index + 1);
}

const input = "prettyandsimple@example.com";
const input1 = "fully-qualified-domain@codesignal.com";

console.log(solution(input)); // -> example.com
console.log(solution(input1)); // -> codesignal.com
