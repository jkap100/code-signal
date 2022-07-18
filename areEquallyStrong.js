function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  let yourMin = Math.min(yourLeft, yourRight);
  let yourMax = Math.max(yourLeft, yourRight);
  let friendsMin = Math.min(friendsLeft, friendsRight);
  let friendsMax = Math.max(friendsLeft, friendsRight);
  //   console.log(yourMin);
  //   console.log(yourMax);
  //   console.log(friendsMin);
  //   console.log(friendsMax);

  return yourMin == friendsMin && yourMax == friendsMax;
}

// function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
//   let yourMin = yourLeft <= yourRight ? yourLeft : yourRight;
//   let yourMax = yourRight <= yourLeft ? yourLeft : yourRight;
//   let friendsMin = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
//   let friendsMax = friendsRight <= friendsMin ? friendsLeft : friendsRight;
//   //   console.log(yourMin);
//   //   console.log(yourMax);
//   //   console.log(friendsMin);
//   //   console.log(friendsMax);

//   return yourMin == friendsMin && yourMax == friendsMax;
// }

console.log(solution(10, 15, 15, 10)); //true
console.log(solution(15, 10, 15, 10)); //true
console.log(solution(15, 10, 15, 9)); //false
