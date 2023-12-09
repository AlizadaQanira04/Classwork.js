//TASK1
// let array = [1, 2, 3, 4];
// let arr = new Array();
//  console.log(new Array);
//TASK2
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBN",
  "Oracle",
  "Amazon",
];
//TASK4
// console.log(itCompanies.length);
// for (let i = 0; i < itCompanies.length; i++) {
//   console.log(itCompanies[i]);
// }
// TASK5
// console.log(itCompanies[0]);
console.log(itCompanies[parseInt(itCompanies.length / 2)]);
// console.log(itCompanies[itCompanies.length-1]);

//TASK6

let newArray = [];
for (i = 0; i < itCompanies.length; i++) {
  //   console.log(  itCompanies[i].toLocaleUpperCase());
  newArray.push(itCompanies[i].toLocaleUpperCase());
}
console.log(newArray);

console.log(`${itCompanies.toString() }boyuk IT sirketlerr. `);
