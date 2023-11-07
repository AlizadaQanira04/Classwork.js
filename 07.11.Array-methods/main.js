// TASK1;
// let number = [1, 2, 3, 4, 5, 6, 7, 8];
// let num = number.filter((item) => item % 2 !== 0);
// console.log(num);

// let number = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let num = number.filter((item) => item <= 10 && 0 < item);
// console.log(num);

//TASK2;
// let users = [
//   {
//     first_name: "Mike",
//     last_name: "Sheridan",
//   },
//   {
//     first_name: "Tim",
//     last_name: "Lee",
//   },
//   {
//     first_name: "John",
//     last_name: "Carte",
//   },
// ];

// let userName = users.map((el) => {
//   return `${el.first_name} ${el.last_name}`;
// });
// console.log(userName);

//TAASK3
let  persons = [
    { name: "Akif", age: 25 },
    { name: "Aysu", age: 32 },
    { name: "Ali", age: 35 }
];
// let firstPerson = persons.find((el)=>el.age>30);
// console.log(firstPerson);


let firstPerson = persons.findIndex((el)=>el.age>30);
console.log(firstPerson);


