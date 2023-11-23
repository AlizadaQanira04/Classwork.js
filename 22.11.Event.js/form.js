let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let submit = document.querySelector("#submit");
let form=document.

form.addEventListener("submit", function (event) {
  if (email.value !== "" && password.value !== "") {
    let user = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    console.log(user);
    email.value = "";
    password.value = "";
  } else {
    alert("input fileds can not empty!!");
  }

  event.preventDefault();
});
