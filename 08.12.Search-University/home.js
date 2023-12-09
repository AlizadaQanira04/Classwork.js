const loading = document.querySelector(".loading");
let search = document.querySelector(".search");
let tBody = document.querySelector("tbody");
const BASE_URL = `http://universities.hipolabs.com/search?country=Azerbaijan`;

async function getData() {
  loading.classList.add("show");
  let response = await axios(`${BASE_URL}`);
  //   console.log(response.data);
  loading.classList.remove("show");
  drawTable(response.data);
}
getData();

function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    let tr = document.createElement("tr");
    tr.innerHTML += `
    <td>${element.name}</td>
    <td>${element.country}</td>
    <td>${element.domains[0]}</td>
    <td><a href="${element.web_pages[0]}">${element.web_pages[0]}</a></td>
   `;
    tBody.append(tr);
  });
}

// let uni = null;
// let uniCopy = null;
// (async () => {
//     let response = await axios(`${BASE_URL}`);
//     uni = response.data;
//     uniCopy= structuredClone(uni);
//   })();
search.addEventListener("input", function (event) {
  loading.classList.add("show");
  fetch(`${BASE_URL}&name=${event.target.value.toLocaleLowerCase()}`)
    .then((response) => response.json())
    .then((data) => {
      drawTable(data);
      loading.classList.remove("show");
    })
    .catch();
});
