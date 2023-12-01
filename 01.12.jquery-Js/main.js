let arr = JSON.parse(localStorage.getItem("todo")) ?? [];

function drawTodo(array) {
  $(".todoList").html("");

  array.forEach((el) => {
    let pElement = document.createElement("p");

    $(".todoList").append(pElement);
    pElement.innerText = el;

    pElement.addEventListener("click", function () {
      this.remove();
      arr = arr.filter((item) => item != el);
      localStorage.setItem("todo", JSON.stringify(arr));
    });
  });
}

$(".btn").on("click", function () {
  arr.push($(".form-control").val());

  localStorage.setItem("todo", JSON.stringify(arr));
  drawTodo(arr);

  $(".form-control").val("");
});

drawTodo(arr);
