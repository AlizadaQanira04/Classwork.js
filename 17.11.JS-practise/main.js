// ------------------------------------------------------- TASK 1 -------------------------------------------------------

// Write a JavaScript function that reverse a number.
// Sample Data and output:
// let number = 32243;
// let srtNumber = "";
// function reverce(num) {
//   let result = String(num).split("").reverse().join("");
//   return result;
// }

// console.log(reverce(12435645));

// Example x = 32243;
// Expected Output : 34223

//------------------------------------------------------- TASK 2 -------------------------------------------------------

// Write a JavaScript function that returns a passed string with letters in

// function letter(str){
//     return str.split("").sort().join("");
// }
// console.log(letter(" yhfryh"));

// alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

// ------------------------------------------------------- TASK 3 -------------------------------------------------------

function lowerCase(str) {

}
console.log(lowerCase("gnhyjrfyjr"));
// Write a JavaScript function that accepts a string as a parameter and converts the
// first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

// ------------------------------------------------------- TASK 4 -------------------------------------------------------

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   city: "Ganja",
//   website: "code.edu.az",
//   languageInfo: {
//     eng: "Advance",
//     aze: "Fluenty",
//     rus: "Intermediate",
//   },
// };

// person adlı object-dən firstName-i, languageInfo-dan eng və rus property-ni destructing edin, əlavə olaraq
// personda yerdə qalan bütün property-ləri otherInfo adı altında rest operatoru ilə bir dəyişənə çıxarın.

// console.log(eng); // "Advance"
// console.log(otherInfo); // {lastName: 'Doe', city: 'Ganja', website: 'code.edu.az'}

// ------------------------------------------------------- TASK 5 -------------------------------------------------------

// let users = [
//   {
//     name: "John Doe",
//     email: "john@example.com",
//     city: "Ganja",
//     country: "Azerbaijan",
//   },
//   {
//     name: "Jane Smith",
//     email: "jane@example.com",
//     city: "Paris",
//     country: "France",
//   },
//   {
//     name: "Bob Johnson",
//     email: "bob@example.com",
//     city: "Sydney",
//     country: "Australia",
//   },
//   {
//     name: "Alice Lee",
//     email: "alice@example.com",
//     city: "Tokyo",
//     country: "Japan",
//   },
// ];

// spread operatoru ilə users array-dəki hər bir objectin country property-sinin sadəcə ilk 3 hərfini saxlayın,
// hər biri böyük hərflə olsun.
// Məsələn: country: "AZE", country: "FRA",

// ------------------------------------------------------- TASK 6 -------------------------------------------------------

// const users = [
//   {
//     firstName: 'Mike',
//     lastName: 'Sheridan'
//   },
//   {
//     firstName: 'Tim',
//     lastName: 'Lee'
//   },
//   {
//     firstName: 'John',
//     lastName: 'Carte'
//   }
// ];

// Verilmiş array-də objectlərin firstName və lastName dəyişkənin aşağıdaki kimi göstərin.

// =====> ["Mike Sheridan", "Tim Lee", "John Carte"]

// ------------------------------------------------------- TASK 7 -------------------------------------------------------

// var a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7],
// ];

// Nəticə: =====>>
// row 0
//  1
//  2
//  1
//  24
// row 1
//  8
//  11
//  9
//  4
// row 2
//  7
//  0
//  7
//  27
// row 3
//  7
//  4
//  28
//  14
// row 4
//  3
//  10
//  26
//  7
