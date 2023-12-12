let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");
let icon = document.querySelector(".fa-solid");
let arr = JSON.parse(localStorage.getItem("arr")) ?? [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let bool = arr.some(
    (item) =>
      item.userName === allInputs[0].value &&
      item.email === allInputs[1].value &&
      item.password === allInputs[2].value
  );
  if (
    allInputs[0].value !== "" &&
    allInputs[1].value !== "" &&
    allInputs[2].value !== ""
  ) {
    if (!bool) {
      let obj = {
        userName: allInputs[0].value,
        email: allInputs[1].value,
        password: allInputs[2].value,
        id: Date.now(),
      };
      arr.push(obj);
      localStorage.setItem("arr", JSON.stringify(arr));
      allInputs.forEach((item) => (item.value = ""));
      window.location = "login.html";
    } else {
      window.alert("this information used");
    }
  } else {
    window.alert("input not be empty");
  }
});

icon.style.cursor = "pointer";
icon.addEventListener("click", function () {
  if (this.className === "fa-solid fa-eye") {
    this.className = "fa-solid fa-eye-slash";
    allInputs[2].type = "text";
  } else {
    this.className = "fa-solid fa-eye";
    allInputs[2].type = "password";
  }
});
