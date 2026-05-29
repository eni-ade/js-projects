const mainBg = document.querySelector(".main-bg");
const input = document.getElementById("userInput");
const button = document.getElementById("btn");

function changeBackground() {
  const color = input.value;
  let background = mainBg;
  background.style.backgroundColor = color;
  if (background.style.backgroundColor === "black" || "#000") {
    background.style.color = "white";
  }
}

button.addEventListener("click", changeBackground);
