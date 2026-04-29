const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

let temperatureArr = [celsius, fahrenheit, kelvin];

function calculateTemp(item) {
  let celsiusValue, fahrenheitValue, kelvinValue;
  switch (item.target.id) {
    case "celsius":
      celsiusValue = Number(celsius.value);
      fahrenheitValue = celsiusValue * (9 / 5) + 32;
      kelvinValue = celsiusValue + 273.15;
      fahrenheit.value = fahrenheitValue.toFixed(2);
      kelvin.value = kelvinValue.toFixed(2);
      break;
    case "fahrenheit":
      fahrenheitValue = Number(fahrenheit.value);
      celsiusValue = (5 / 9) * (fahrenheitValue - 32);
      kelvinValue = celsiusValue + 273.15;
      celsius.value = celsiusValue.toFixed(2);
      kelvin.value = kelvinValue.toFixed(2);
      break;
    case "kelvin":
      kelvinValue = Number(kelvin.value);
      celsiusValue = kelvinValue - 273.15;
      fahrenheitValue = celsiusValue * (9 / 5) + 32;
      celsius.value = celsiusValue.toFixed(2);
      fahrenheit.value = fahrenheitValue.toFixed(2);
      break;
    default:
      break;
  }
}

temperatureArr.forEach((item) => {
  item.addEventListener("change", (event) => calculateTemp(event));
});
