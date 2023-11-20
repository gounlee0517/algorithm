// function solution(num) {
//   let answer = 0;
  
//   while (num != 1) {
//       if (num % 2 == 0) {
//           num /= 2;
//        } else if (num % 2 == 1) {
//           num * 3 + 1;
//       }
//       answer += 1;
//   }
//   if (answer >= 500) {
//       return -1;
//   } else {
//       return answer;
//   }
// }

function solution(num) {
  let answer=0;

  for (let i = 0; i < 500; i++) {
    if (num !== 1) {
      num = num % 2 == 0 ? num / 2 : num * 3 + 1;
    } else {
      return answer = i;
    }
  }
  return answer = -1;
}