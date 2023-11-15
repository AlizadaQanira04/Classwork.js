let person = {
  firstName: "qanira",
  lastName: "alizade",
  age: 19,
  skills: ["listen", "read", "eat", "sleep"],
  uni: "gdu",
};

//task1
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// delete person.age
// console.log(person);

let newArray = Object.values(person);

let result = newArray[0];
newArray.forEach((item) => {
  if (item.length > result.length) {
    result = item;
  }
});
// console.log(result);

//task2
var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    readingStatus: true,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    readingStatus: true,
  },
  {
    title: "Suzanne Collins",
    author: "Mockingjay: The Final Book",
    readingStatus: false,
  },
];

//   Əgər readingStatus true olarsa console-a "Already read 'title' by author' Əgər false olarsa "You still need to read 'title' by author' yazsın
// library.forEach((item) => {
//   if (item.readingStatus === "true") {
//     console.log(`Already read ${item.title} by ${item.author}`);
//   } else {
//     console.log(`You still need to read ${item.title} by  ${item.author}`);
//   }
// });

//task3
let employee = {
  name: "jon",
  jobTitle: "teacher",
  salary: 90000,
  promote: function (jobTitle, salary) {
    let result = `${jobTitle} with a salary of ${salary}`;
    return result;
  },
};

// console.log(
//   employee.name +
//     " is now " +
//     employee.promote("Senior Software Engineer", 90000)
// );

//task4

let nameOf = {
  firstName: "Philip",
  lastName: "Fry",
};

let details = {
  job: "Delivery Boy",
  employer: "Planet Express",
};
let character = Object.assign(nameOf , details) ;
console.log(character);
// Object methodu ilə character objecti təyin edib aşağıdakı kimi console-a çıxardın.

// console.log(character); ====>> // {firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}
