let body = document.querySelector("body");
let headerTag = document.createElement("header");
let div = document.createElement("div");
let h1 = document.createElement("h1");

h1.innerText = "Login";

headerTag.append(h1);

let form = document.createElement("form");
let inputEmail = document.createElement("input");
inputEmail.placeholder = "Email";
inputEmail.style.padding = "5px";
inputEmail.style.width = "200px";
form.append(inputEmail);
let inputPassword = document.createElement("input");
inputPassword.placeholder = "Password";
inputPassword.style.padding = "5px";
inputPassword.style.width = "200px";
form.append(inputPassword);
let text1 = document.createElement("a");
text1.href = "#";
text1.innerText = "Forgot password";
form.append(text1);
let btn = document.createElement("button");
btn.innerText = "Login";
btn.style.padding = "7px";
btn.style.width = "220px";
btn.style.borderRadius = "5px";
btn.style.backgroundColor = "blue";
btn.style.color = "white";
btn.setAttribute("type", "submit");
form.append(btn);
let text2 = document.createElement("a");
text2.href = "signup.html";
text2.innerText = "Don't have an account ? Signup";
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
    let arr=JSON.parse(localStorage.getItem("arr"))
  event.preventDefault();
  let bool = arr.some(
    (item) =>
      item.createPassWord === inputPassword.value &&
      item.email === inputEmail.value
  );
  let obj = {
    email: inputEmail.value,
    createPassWord: inputPassword.value,
    id: Date.now(),
  };
  if (inputPassword.value !== "" || inputEmail.value !== "") {
    if (bool) {
        window.location="home.html"
    } else {
      alert("eror");
    }
  } else {
    alert("ALREADY USED");
  }
  inputEmail.value = "";
  inputPassword.value = "";
});
