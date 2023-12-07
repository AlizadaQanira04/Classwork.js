const search = document.querySelector(".search");
const BASE_URL = `http://localhost:8080`;
let box = document.querySelector(".box");
async function getData(endpoint) {
  let response = await axios(`${BASE_URL}/${endpoint}`);
  console.log(response.data);
  drawCard(response.data);
}

getData("blogs");

function drawCard(data) {
  box.innerHTML = "";
  data.forEach((element) => {
    box.innerHTML += `
   <div>
   <h1>${element.title}</h1>
  
     <p>${element.body} <a href="./details.html?id=${element.id}">Real More...</a></p>
    
   
   <p>written by${element.author}</p>
   <button class="btn1" onclick=deleteBlog(${element.id},this)>DELETE</button>
   <button>EDIT</button>
   
   </div>
    `;
  });
}
async function deleteBlog(id, btn) {
  if (confirm("are u sure to delete blogs??")) {
    btn.parentElement.remove();
    await axios.delete(`${BASE_URL}/blogs/${id}`);
    await getData("blogs");
  }
}

let blogs = null;
let blogsCopy = null;
(async () => {
    let response = await axios(`${BASE_URL}/blogs`);
    blogs = response.data;
    blogsCopy = structuredClone(blogs);
  })();

search.addEventListener("input", function (event) {
    let filtered = blogs.filter((item) =>
      item.title
        .toLocaleLowerCase()
        .includes(event.target.value.toLocaleLowerCase())
    );
    drawCard(filtered);
  });
  
box.style.display = "flex";
box.style.gap = "20px";
box.style.margin = "40px 20px";
