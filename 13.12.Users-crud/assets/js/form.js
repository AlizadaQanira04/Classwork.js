let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");
let id = new URLSearchParams(window.location.search).get("id");
let BASE_URL = "http://localhost:8080/users";

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let date = new Date();
  if (
    allInputs[0].value !== "" &&
    allInputs[1].value !== "" &&
    allInputs[2].value !== ""&&
    allInputs[3].value!==""
  ) {
    let userObj = {
      name: allInputs[0].value,
      surname: allInputs[1].value,
      email: allInputs[2].value,
      date: date.toLocaleString(),
      userphoto: `./assets/img/${allInputs[3].value.split("\\")[2]}`,
    };
    if (!id) {
      axios.post(`${BASE_URL}`, userObj);
    } else {
      axios.patch(`${BASE_URL}/${id}`, userObj);
    }

    window.location = "index.html";
    allInputs[0].value = "";
    allInputs[1].value = "";
    allInputs[2].value = "";
    allInputs[3].value="";
  } else {
    alert("input mustn't empty");
  }
});

async function getData() {
  let response = await axios.get(`${BASE_URL}/${id}`);
  let data = await response.data;
  allInputs[0].value = data.name;
  allInputs[1].value = data.surname;
  allInputs[2].value = data.email;
  allInputs[3].value = data.userphoto;
}

id && getData();
