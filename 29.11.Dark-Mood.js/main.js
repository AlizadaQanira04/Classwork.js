let body = document.querySelector(".body");
let box = document.querySelector(".box");
let btn = document.querySelector(".dark");
let mode = localStorage.getItem("dark-mode");
if(mode==="true"){
    body.classList.add("dark-mode");
    box.classList.add("dark-box"); 
}
btn.addEventListener("click", function () {
  if (btn.innerText === "Toogle Dark Mode") {
    btn.innerText = "Toogle White Mode";
  } else {
    btn.innerText = "Toogle Dark Mode";
  }
  body.classList.toggle("dark-mode");
  box.classList.toggle("dark-box");

  if (mode=== "true") {
    localStorage.setItem("dark-mode", false);
  } else {
    localStorage.setItem("dark-mode", true);
  }
});
