let key = document.querySelectorAll(".key");
let words = document.querySelector(".words")
console.log(key);
let listOne = document.querySelector(".list one");
let listTwo = document.querySelector(".list two");
let listThree = document.querySelector(".list three");

window.addEventListener("keydown", function (e) {
  key.forEach((element) => {
    console.log(element.innerText === e.key);
    if (element.innerText === e.key) {
      element.style.opacity = "0";
      element.style.backgroundColor = "#06c06f";
      element.style.transform = "scale(1.3)";
      element.style.transition = "150ms";
      words.innerText+=e.key;
    }
  });
});
window.addEventListener("keyup", function (e) {
  key.forEach((element) => {
    if (element.innerText === e.key) {
      element.style.opacity = "1";
      element.style.backgroundColor = "darkcyan  ";
      element.style.transform = "scale(1)";
    }
  });
});
