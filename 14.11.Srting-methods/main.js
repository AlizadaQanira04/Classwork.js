//Task1
// let text = "Java is awesome. Java is fun.";
// function Str(str) {
//   let result = str.replaceAll("Java", "Javascript");
//   return result;
// }

// console.log(Str(text));

// //TAsk2
// function mixUp(a, b) {
//   let result = b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
//   return result;
// }
// console.log(mixUp("val", "pur"));
// console.log(mixUp("donce", "gevlet"));

//Task 3
// function verbing(word) {
//   let result;
//   if (word.length < 3) {
//     result = word;
//   } else if (word.endsWith("ing")) {
//     result = word + "ly";
//   } else {
//     result = word + "ing";
//   }
//   return result;
// }

// console.log(verbing("go")); // go
// console.log(verbing("swim")); //swiming
// console.log(verbing("swiming")); //swimingly

//Task4
// Sözün palindrom olub olmadığını yoxlayın.
// function isPalindrome(string) {
//   let result;
//   if (string == string.split("").reverse().join("")) {
//     result = string + " palidrondur ";
//   } else {
//     result = string + " palidron deyil";
//   }
//   return result;
// }

// console.log(isPalindrome("hello"));

//TASK5
// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// let leng = 4;
// function splitIntoChunk() {
//  return [[...array.slice(0,leng)],[...array.slice(leng)]]
// }

// console.log(splitIntoChunk(array, leng))

//TASK6
function longestWord(){
  
}

console.log(longestWord("Hello word hi programmers"));


