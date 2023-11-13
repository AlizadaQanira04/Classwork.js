//TASK1

// function findFirstNotRepeatedChar(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i] )=== str.lastIndexOf(str[i])) {
//       result = str[i];
//       break;
//     }
//   }
//   return result;
// }
// console.log(findFirstNotRepeatedChar("abacddbecz"));

//TASK2
// function charCount(str1, str2) {
//   let count = 0;
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i].toLocaleLowerCase() === str2.toLocaleLowerCase()) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(charCount("w3resCCCcource.com", "c"));

//TASK3
function makeId(num) {
    let text = "";
    let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < num.legth; i++) {
  text+=charList.charAt(Math.floor(Math.random()*charList.length))     
  }
  console.log(Math.random()*charList.length);
  return text;
}
console.log(makeId(16));