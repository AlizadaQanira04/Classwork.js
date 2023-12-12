let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");
let icon = document.querySelector(".fa-solid");
let arr = JSON.parse(localStorage.getItem("arr")) ?? [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (allInputs[0].value !== "" && allInputs[1].value !== "") {
    let bool = arr.find(
      (item) =>
        item.email === allInputs[0].value &&
        item.password === allInputs[1].value
    );
    if (bool) {
      window.location = "home.html";
    } else {
      window.alert("not find");
    }
  } else {
    window.alert("input not be empty");
  }
});

icon.style.cursor = "pointer";
icon.addEventListener("click", function () {
  if (this.className === "fa-solid fa-eye") {
    this.className = "fa-solid fa-eye-slash";
    allInputs[1].type = "text";
  } else {
    this.className = "fa-solid fa-eye";
    allInputs[1].type = "password";
  }
});
