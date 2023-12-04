const products = document.querySelector(".products-div");
const form = document.querySelector("form");
const allInputs = document.querySelectorAll(".form-control");

const BASE_URL = ` https://api.escuelajs.co/api/v1`;

fetch(`${BASE_URL}/products`)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    drawCards(data);
  })
  .catch((err) => console.log(err));

  function drawCards(array) {
    products.innerHTML = "";
    array.forEach((element) => {
      products.innerHTML += `
      <div class="product">
      <div class="product-image">
          <img src="${element.images[0]}" style="width: 100%" alt="" />
      </div>
      <div class="product-heading">
          <p class="title">${element.title}</p>
          <p class="description">${element.description}</p>
          <span>${element.price}</span>
          </div>
          <button class="deleteBtn"onclick=deleteCustomer("${element.id}",this)>DELETE</button>
  </div>
          `;
    });
  }

function deleteCustomer(id, btn) {
    if (confirm("Are u sure to delete customer??")) {
      fetch(`${BASE_URL}/products/${id}`, {
        method: "DELETE",
      });
    
      btn.closest(".product").remove();
    }
  }
  
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    let obj = {
        ProductTitle: allInputs[0].value,
        Productprice: allInputs[1].value,
        Description:allInputs[2].value,
        categoryId:1,
        images:[inputs[3].value]
      
    };
  
    fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then(() => {
      fetch(`${BASE_URL}/products`)
        .then((response) => response.json())
        .then((data) => {
          drawCards(data);
        })
        .catch((err) => console.log(err));
    });
  
    allInputs.forEach((item) => (item.value = ""));
  });