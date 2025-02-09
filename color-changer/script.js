const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

buttons.forEach( (button) => {
  button.addEventListener("click",  (event) => {
    if (event.target.id === "grey") {
      body.style.backgroundColor = "grey";
    }
    if (event.target.id === "white") {
      body.style.backgroundColor = "white";
    }
    if (event.target.id === "blue") {
      body.style.backgroundColor = "blue";
    }
    if (event.target.id === "yellow") {
      body.style.backgroundColor = "yellow";
    }
  });
});
