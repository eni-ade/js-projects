function createElement(element) {
  return document.createElement(`${element}`);
}

const container = createElement("div");
container.classList.add("flex", "container");

const body = document.querySelector("body");
body.classList.add("flex");
body.appendChild(container);

// create elements in container
const title = createElement("h1");
const instruction = createElement("label");
const userInput = createElement("input");
const calcBtn = createElement("button");
const result = createElement("p");

// update elements
title.textContent = "Age Calculator";
instruction.textContent = "Enter your date of birth:";
instruction.setAttribute("for", "birthDate");
userInput.type = "date";
userInput.id = "birthDate";
calcBtn.textContent = "Calculate Age";
calcBtn.style.backgroundColor = "green";
calcBtn.style.color = "#fff";
result.style.fontWeight = "bold";

// add elements to container
container.append(title, instruction, userInput, calcBtn, result);

calcBtn.addEventListener("click", () => {
  let currentDate = Date.now();
  const birthDate = new Date(userInput.value).getTime();
  let ageInMs = currentDate - birthDate;
  let age = ageInMs / (1000 * 60 * 60 * 24 * 365);
  result.textContent = `You are ${age.toFixed(0)} years old`;
});
