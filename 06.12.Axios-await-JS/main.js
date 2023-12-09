let box = document.querySelector(".box");
let firstBtn = document.querySelector(".firstBtn");
let secondBtn = document.querySelector(".secondBtn");
let thirdBtn = document.querySelector(".thirdBtn");
let fourthBtn = document.querySelector(".fourthBtn");

let BASE_URL = "https://fakestoreapi.com/products";
// axios.get(`${BASE_URL}/category`).then((res) => console.log(res.data));

function drawCards(array) {
  box.innerHTML = "";
  array.forEach((element) => {
    box.innerHTML+= `

    <div class="col-12 col-md-6 col-lg-3">
    <div class="card" style="width: 18rem">
    <img src="${element.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.description.slice(0, 55)}...</p>
      <p class="card-price">${element.price}$</p>
      <a href="./details.html?id=${element.id}" class="btn btn-primary">DETAILS</a>
    </div>
    </div>
  </div>
 `

;
  });
}

async function getData(endPoint="") {
  let responce = await axios.get(`${BASE_URL}/${endPoint}`);
  drawCards(responce.data);
}


getData()


firstBtn.addEventListener("click", function () {
  getData("category/electronics");
});
secondBtn.addEventListener("click", function () {
  getData("category/jewelery");
});
thirdBtn.addEventListener("click", function () {
  getData("category/men's clothing");
});
fourthBtn.addEventListener("click", function () {
  getData("category/women's clothing");
});
