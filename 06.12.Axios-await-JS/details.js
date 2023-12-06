let id = new URLSearchParams(window.location.search).get("id");
let BASE_URL = `https://fakestoreapi.com/products/${id}`;
let body = document.querySelector("body");
async function getData() {
  let responce = await axios.get(`${BASE_URL}`);
 
  body.innerHTML = `
    <div class="col-12 col-md-6 col-lg-3">
    <div class="card" style="width: 18rem">
    <img src="${responce.data.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${responce.data.title}</h5>
      <p class="card-text">${responce.data.description}...</p>
      <p class="card-price">${responce.data.price}$</p>
      <a href="./details.html" class="btn btn-primary button-back" onclick=back()>Back</a>
    </div>
    </div>
  </div>
 `;
}
getData();
function back() {
  window.history.back();
}
