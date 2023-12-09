let firstName = document.querySelector("#firstName");
let form = document.querySelector("form");
let lastName = document.querySelector("#lastName");
let address = document.querySelector("#address");

let data = JSON.parse(localStorage.getItem("personObj")) || [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let info = {
    id: Date.now(),
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
  };
  data.push(info);
  localStorage.setItem("personObj", JSON.stringify(data));

  firstName.value = "",
  lastName.value = "",
  address.value = ""
});


