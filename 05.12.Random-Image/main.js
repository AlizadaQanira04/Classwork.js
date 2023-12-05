let h1 = document.createElement("h1");
h1.innerText = "RANDOM IMAGE";
let box = document.querySelector(".box");
let img = document.createElement("img");
img.src = "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg";
let body = document.querySelector("body");
let container = document.querySelector(".container");

h1.style.color = "white";
box.style.display = "flex";
box.style.flexDirection = "column";
box.style.justifyContent = "center";
box.style.alignItems = "center";
box.style.margin = "80px";
img.style.width = "400px";
img.style.height = "400px";
img.style.borderRadius = "15%";
h1.style.textAlign = "center";
container.append(h1);
container.append(img);

setInterval(() => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      img.src = data.message;
    });
}, 2000);
body.style.backgroundImage =
  "linear-gradient(to left bottom , blue, pink,violet,yellow)";
