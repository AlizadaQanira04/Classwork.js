let userName=JSON.parse(localStorage.getItem("name"));

document.querySelector("h1").innerText+=` ${userName}`