let favoriteItems = JSON.parse(localStorage.getItem("products"));
let box = document.querySelector(".box");

drawCard(favoriteItems);
function drawCard(data) {
  data.forEach((element) => {
    box.innerHTML += `<div class="col-12 col-md-6 col-lg-4 mb-5 ">
    <div class="card" style="width: 18rem">
    <img src="${element.userphoto}" class="card-img-top" alt="..." />
    <div class="card-body">
    <h5 class="card-title">${element.name}${element.surname} </h5>
    <p>${element.email}</p>
    <p class="card-text">
    ${element.date}
    </p>
   <button class="btn btn-danger" onclick=deleteProduct(this,"${
      element.id}")>Delete</button>
    </div>
    </div>
    </div> `;
  });
}


function deleteProduct(btn, id) {
   favorite =favoriteItems.filter((item) => item.id!==id);
  btn.closest("div").remove();
}