let search = document.querySelector("#search");
let addBtn = document.querySelector(".add");
let ul = document.querySelector("#list");

addBtn.style.backgroundColor = "blue";
addBtn.style.color = "white";
addBtn.style.border = "none";
addBtn.style.borderRadius = "2px ";
addBtn.style.padding = "4px";

addBtn.addEventListener("click", function () {
  if (search.value !== "") {
    let li = document.createElement("li");
    let span = document.createElement("span");
    let deletBtn = document.createElement("button");

    li.style.backgroundColor = "pink";
deletBtn.style.backgroundColor="red";
deletBtn.style.margin="20px"
    span.innerText = search.value;
    deletBtn.innerText = "Delete";

    li.append(span, deletBtn);
    ul.append(li);

    deletBtn.addEventListener("click", function () {
      this.parentElement.remove();
    });
  } else {
    alert("empty box eror");
  }
  search.value = "";
});
