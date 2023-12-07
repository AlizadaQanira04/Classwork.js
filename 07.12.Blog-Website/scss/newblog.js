const id = new URLSearchParams(window.location.search).get("id");
const input = document.querySelector(".input");
const textArea=document.querySelector("#text");
const select=document.querySelector(".select");
const form = document.querySelector("form");


const BASE_URL = `http://localhost:8080`;
async function getBlogs() {
    try {
      let response = await axios(`${BASE_URL}/blogs/${id}`);
      console.log(response.data);
      input.value = response.data.title;
      textArea.value = response.data.body;
      
    } catch (error) {
      console.log(error);
    }
  }
  
  id && getSupplier();