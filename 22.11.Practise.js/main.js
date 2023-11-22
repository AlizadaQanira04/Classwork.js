let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let result = document.querySelector(".result");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
startBtn.style.width = "100px";
startBtn.style.height = "30px";
startBtn.style.backgroundColor = "green";
startBtn.style.color = "white";

stopBtn.style.width = "100px";
stopBtn.style.height = "30px";
stopBtn.style.backgroundColor = "red";
stopBtn.style.color = "white";

resetBtn.style.backgroundColor = "red";
resetBtn.style.width = "100px";
resetBtn.style.height = "30px";

btn1.style.width = "150px";
btn1.style.height = "30px";
btn1.style.backgroundColor = "teal";
btn1.style.color = "white";

btn2.style.width = "150px";
btn2.style.height = "30px";
btn2.style.backgroundColor = "teal";
btn2.style.color = "white";

let countInterval;
let count = 0;
startBtn.addEventListener("click", function () {
  //   clearInterval(countInterval);
  this.setAttribute("disabled", null);
  stopBtn.removeAttribute("disabled");
  countInterval = setInterval(() => {
    count++;
    result.innerText = count;
  }, 500);
});
stopBtn.addEventListener("click", function () {
  this.setAttribute("disabled", null);
  startBtn.removeAttribute("disabled");
  clearInterval(countInterval);
});
resetBtn.addEventListener("click", function () {
  count = 0;
  result.innerText = count;
});

btn1.addEventListener("click", function () {
  clearInterval(countInterval);
  count += 1;
  result.innerText = count;
});
btn2.addEventListener("click", function () {
  clearInterval(countInterval);
  count -= 1;
  result.innerText = count;
});

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let btnPilus = document.querySelector(".btnPilus");
let btnMinus = document.querySelector(".btnMinus");
input1.style.border = "3px solid brown";
btnPilus.style.width = "200px";
btnPilus.style.height = "30px";
btnPilus.style.border = "none";

btnPilus.style.backgroundColor = "grey";

input2.style.border = "3px solid brown";
btnMinus.style.width = "200px";
btnMinus.style.height = "30px";
btnMinus.style.backgroundColor = "grey";
btnMinus.style.border = "none";

btnPilus.addEventListener("click", function () {
  clearInterval(countInterval);
  count += +input1.value;
result.innerText = count;
});
btnMinus.addEventListener("click", function () {
  clearInterval(countInterval);
  count -= +input2.value;
result.innerText = count;
});


