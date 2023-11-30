let body = document.querySelector("body");
let headerTag = document.createElement("header");
let div = document.createElement("div");
let h1 = document.createElement("h1");

h1.innerText = "Signup";

headerTag.append(h1);

let form = document.createElement("form");
let inputEmail = document.createElement("input");

inputEmail.placeholder = "Email";
inputEmail.setAttribute("type", "text");
inputEmail.style.padding = "5px";
inputEmail.style.width = "200px";
form.append(inputEmail);
let inputPassword = document.createElement("input");
inputPassword.placeholder = " Creat Password";
inputPassword.style.padding = "5px";
inputPassword.style.width = "200px";
inputPassword.setAttribute("type", "password");
form.append(inputPassword);
let inputConfirmPassword = document.createElement("input");
inputConfirmPassword.placeholder = "confirm password";
inputConfirmPassword.style.padding = "5px";
inputConfirmPassword.style.width = "200px";
inputConfirmPassword.setAttribute("type", "password");
form.append(inputConfirmPassword);
let btn = document.createElement("button");
btn.innerText = "Sign up";
btn.style.padding = "7px";
btn.style.width = "220px";
btn.style.borderRadius = "5px";
btn.style.backgroundColor = "blue";
btn.style.color = "white";
btn.setAttribute("type", "submit");
form.append(btn);
let text2 = document.createElement("a");
text2.href = "login.html";
text2.innerText = "Already have an account?login";
form.append(text2);
div.append(form);
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.justifyContent = "center";
form.style.alignItems = "center";
form.style.gap = "20px";
headerTag.style.display = "flex";
headerTag.style.alignItems = "center";
headerTag.style.justifyContent = "center";
body.append(headerTag);
body.append(form);
body.style.margin = "70px";

form.addEventListener("submit", function (event) {
    let arr = JSON.parse(localStorage.getItem("arr")) ?? [];
  event.preventDefault();
  let bool = arr.some(
    (item) =>
      item.createPassWord === inputPassword.value ||
      item.email === inputEmail.value ||
      item.ConfirmPassword === inputConfirmPassword.value
  );
  let obj = {
    email: inputEmail.value,
    createPassWord: inputPassword.value,
    ConfirmPassword: inputConfirmPassword.value,
    id: Date.now(),
  };
  if (
    inputPassword.value !== "" ||
    inputEmail.value !== "" ||
    inputConfirmPassword.value !== ""
  ) {
    if (!bool) {
      arr.push(obj);
      localStorage.setItem("arr", JSON.stringify(arr));
    }else{
        alert("eror");
    }
  } else {
    alert("ALREADY USED");
  }
  inputConfirmPassword.value = "";
  inputEmail.value = "";
  inputPassword.value = "";
});
