let search = document.querySelector(".search");
let select = document.querySelector(".select");
const loading = document.querySelector(".loading");
let box = document.querySelector(".box");
let BASE_URL = "https://restcountries.com/v2/all";

let arr = [];
async function getData() {
  loading.classList.add("show");
  let response = await axios.get(`${BASE_URL}`);
  console.log(response.data);
  loading.classList.remove("show");
  drawCard(response.data);
  arr = response.data;
}
getData();

function drawCard(data) {
  box.innerHTML = "";
  data.forEach((element) => {
    box.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4 cards">
      <a href="./details.html?name=${element.name}">
        <div class="card" style="width: 18rem">
          <img src="${element.flags.svg}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">
            Population: ${element.population}
            </p>
            <p>Region: ${element.region}</p>
            <p>Capital: ${element.capital}</p>
          </div>
        </div>
      </a>
    </div>
    `;
  });
}

search.addEventListener("input", function (event) {
  let filtered = arr.filter((item) =>
    item.name
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase())
  );
  drawCard(filtered);
});
select.addEventListener("change", function (event) {
  getRegion(event.target.value);
});
async function getRegion(region) {
  let response = await axios(`https://restcountries.com/v2/region/${region}`);
  drawCard(response.data);
}

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
