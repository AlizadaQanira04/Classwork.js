let basketItems = JSON.parse(localStorage.getItem("products"));
let box = document.querySelector(".box");

drawCard(basketItems);
function drawCard(data) {
  data.forEach((element) => {
    box.innerHTML += `<div class="col-12 col-md-6 col-lg-4 mb-5 ">
    <div class="card" style="width: 18rem">
    <img src="${element.thumbnail}" class="card-img-top" alt="..." />
    <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <h5>${element.price}</h5>
    <p class="card-text">
    ${element.description.slice(0, 100)}...
    </p>
    </div>
    </div>
    </div> `;
  });
}
