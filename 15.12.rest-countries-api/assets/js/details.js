let box = document.querySelector(".box");
let body = document.querySelector("body");
let btn = document.querySelector("button");
let mode = localStorage.getItem("body-dark");
if (mode === "true") {
  body.classList.add("body-dark");
}
btn.addEventListener("click", function () {
  body.classList.toggle("body-dark");

  if (body.classList.contains("body-dark")) {
    localStorage.setItem("body-dark", true);
  } else {
    localStorage.setItem("body-dark", false);
  }
});

let countryName = new URLSearchParams(window.location.search).get("name");

async function getData(countryName) {
  try {
    let response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
   console.log(response);
  } catch (error) {
    console.log(error);
  }
}
getData(countryName);
