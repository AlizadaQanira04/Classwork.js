// --------------------------------------------------------- TASK 1 ---------------------------------------------------------

// Bir dəyişən təyin edin və dəyəri 1 olsun. 1 saniyədən bir consol-da yaratdığınız dəyişənin dəyərini +1 artırın. 4 saniyə
// sonra intervalı sonlandırın.

// let count = 1;
// let interval = setInterval(() => {
//   console.log(count++);
// }, 1000);
// setTimeout(() => {
//     clearInterval(interval)
// }, 4000);

// --------------------------------------------------------- TASK 2 ---------------------------------------------------------

// HTML-də button və text üçün tag yazın. button-a click ettikdə text-içindəki yazı dəyişsin.
let btn = document.querySelector(".btn");
let text = document.querySelector(".text");

btn.addEventListener("click", () => {
  text.style.color = "blue";
  text.style.fontSize = "2rem";
});
// --------------------------------------------------------- TASK 3 ---------------------------------------------------------

// HTML-də birdən çox eyni adda class sahib element yaradın. Hər bir elementi loop ilə tək-tək console-a çıxardın.
let lorem1 = document.querySelectorAll(".lorem");
console.log(lorem1);
lorem1.forEach((item) => {
  console.log(item.innerText);
});
// --------------------------------------------------------- TASK 4 ---------------------------------------------------------
// Verilmiş string-in hər bir hərfini 1 saniyədən bir böyük hərf edin.

// let str = "developer";
// let index = 1;
// let interval = setInterval(() => {
//   if (index <= str.length) {
//     str = str.slice(0, index).toLocaleUpperCase() + str.slice(index);
//     index++;
//     console.log(str);
//   } else {
//     clearInterval(interval);
//   }
// }, 1000);

// Developer
// DEveloper
// DEVEloper
// DEVELOper
// DEVELOPer
// DEVELOPEr
// DEVELOPER

// --------------------------------------------------------- TASK 5 ---------------------------------------------------------
let body = document.querySelector(".body");
// HTML-də button yaradın və ona click ettikdə body-nin background color-u dəyişsin.
let count = 0;
let array = [
  "red",
  "blue",
  "green",
  "yellow",
  "white",
  "purple",
  "solid",
  "grey",
];

// btn.addEventListener("click", () => {
//   document.body.style.backgroundColor =
//     array[Math.floor(Math.random() * array.length)];
// });


