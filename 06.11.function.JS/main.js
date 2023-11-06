//TASK1
// function printFullname(firstname = "lorem", lastname = "ipsum") {
//   let fullName = `l am ${firstname} ${lastname}`;
//   return fullName;
// }
// console.log(printFullname("qanira", "alizade"));
//TASK2
// let sum = (a, b) => a + b;
// let multiply = (a, b) => a * b;
// let subtruct = (a, b) => a - b;
// let divide = (a, b) => a / b;
// console.log(multiply(12, 4));
// console.log(sum(23, 8));
// console.log(subtruct(34, 5));
// console.log(divide(25, 5));
//TASK3

// function calculator(num1, num2, operator) {
//     let a ;
//   if (operator === "+") a = num1 + num2;
//   else if (operator === "-") a = num1 - num2;
//   else if (operator === "*") a = num1 * num2;
//   else if (operator === "/") a = num1 / num2;
//   else {
//     a = "operator deyil";
//   }
//   return a;
// }
// console.log(calculator(2,3,"*"));
// console.log(calculator(2,3,"wefwe"));
//TASK4
// let Employees = [
//   { name: "jamil", salary: 50000, department: "IT" },
//   { name: "jale", salary: 60000, department: "HR" },
//   { name: "Bayram", salary: 55000, department: "IT" },
//   { name: "Sahil", salary: 75000, department: "HR" },
//   { name: "Maryam", salary: 65000, department: "IT" },
//   { name: "Elnare", salary: 80000, department: "HR" },
//   { name: "Davud", salary: 70000, department: "IT" },
// ];
// function filterEmployees(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     array[i].salary > 65000 && newArray.push(array[i]);

// }
// return newArray;
// }
// console.log(filterEmployees(Employees));

//TASK5
// function reverseString(qenire){
//     let str = "";
//     for(let i=qenire.length-1;i>=0;i--){
//         str += qenire[i]
//     }

//     return str;
// }
// console.log(reverseString("Hello"));
// let lorem =
//   " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sunt quam placeat dicta? Asperiores dolores quam obcaecati tempora mollitia. Temporibus obcaecati unde provident ad inventore maxime ratione in labore quaerat.";
// let count = 0;
// function str(lorem) {
//   for (i = 0; i < lorem.length; i++) {
//     if (lorem[i] !== " ") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(str(lorem));

//TASK6
let str ="dream,sea,sky,moon,cat,dog,panda,star,books,musics,impossible";
let max =str[0].length
function words(lorem){
for (let index = 0; index < str.length; index++) {
    if(str[i][str[i].length>max]){

    }
    return max;
}
}
console.log(str(words));