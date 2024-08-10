// function
let iconBtn = document.querySelector(".icon-btn");
let ul = document.querySelector("ul");

iconBtn.addEventListener("click", () => {
  ul.classList.toggle("show"); // toggle the class 'show' on the unordered list
  console.log(ul);

  if (ul.className == "show") {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
  console.log(ul);
});
