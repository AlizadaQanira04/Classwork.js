let tBody = document.querySelector("tbody");
let BASE_URL = "http://localhost:8080/users";
async function getData() {
  let res = await axios.get(`${BASE_URL}`);
  console.log(res.data);
  drawTable(res.data);
}
getData();
function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `
        <td>${element.id}</td>
        <td><img src="${element.userphoto}" alt=""></td>
        <td>${element.name}</td>
        <td>${element.surname}</td>
        <td>${element.email}</td>
        <td>${element.date}</td>
        <td> 
        <a class="tagA" href="form.html?id=${element.id}">Edit</a>
        <button class="button1" onclick=deleteTr("${element.id}",this)>Delete</button>
        <button class="button2" onclick=adToFavorite("${element.id}")>ADD Fav</button>
        </td>
        `;
    tBody.append(trElement);
  });
}

async function deleteTr(id, btn) {
  if (confirm("DELETE ?")) {
    btn.closest("tr").remove();
    await axios.delete(`${BASEd_URL}/${id}`);
    await getData();
  }
}
let favorite = JSON.parse(localStorage.getItem("products")) ?? [];


async function adToFavorite(id) {
let response = axios(`${BASE_URL}/${id}`);
  let data=response.data
  console.log(data);
  let findItem =products.find((item) => item.id === id);
  if(!findItem){
    favorite.push(findItem)

  }else{
    alert("this added")
  }
  // console.log(basketItems);
  localStorage.setItem("favorite",JSON.stringify(favorite))
  
}
