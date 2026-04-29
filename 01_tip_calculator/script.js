const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const calcBtn = document.getElementById("calcBtn");
const total = document.getElementById("total");

function calculateTotal() {
  let billAmount = Number(bill.value);
  let tipPercent = Number(tip.value) / 100;
  let totalAmount = billAmount + tipPercent * billAmount;
  total.textContent = `$${totalAmount.toFixed(2)}`;
}

calcBtn.addEventListener("click", calculateTotal);
