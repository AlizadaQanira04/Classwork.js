let boxes = document.querySelector(".boxes");
let BASE_URL = `http://localhost:8080/products`;

async function getData() {
  let responce = await axios(`${BASE_URL}`);
  console.log(responce.data);
  drawCard(responce.data);
}
getData();
function drawCard(data) {
  boxes.innerHTML = "";
  data.forEach((element) => {
    boxes.innerHTML += `
    <div class="box">
    <div class="image">
      <img src="${element.imageUrl}" alt="" />
    </div>
    <h2>${element.title}</h2>
    <p>${element.describition}</p>
  </div>
        `;
  });
}
