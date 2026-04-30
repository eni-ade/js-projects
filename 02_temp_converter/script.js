const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

let temperatureArr = [celsius, fahrenheit, kelvin];

function calculateTemp(item) {
  switch (item.target.id) {
    case "celsius":
      let celsiusValue = Number(celsius.value);
      fahrenheit.value = (celsiusValue * (9 / 5) + 32).toFixed(2);
      kelvin.value = (celsiusValue + 273.15).toFixed(2);
      break;
    case "fahrenheit":
      let fahrenheitValue = Number(fahrenheit.value);
      celsius.value = (5 / 9) * (fahrenheitValue - 32).toFixed(2);
      kelvin.value = (5 / 9) * (fahrenheitValue - 32) + 273.15;
      break;
    case "kelvin":
      let kelvinValue = Number(kelvin.value);
      celsius.value = (kelvinValue - 273.15).toFixed(2);
      fahrenheit.value = ((kelvinValue - 273.15) * (9 / 5) + 32).toFixed(2);
      break;
    default:
      break;
  }
}

temperatureArr.forEach((item) => {
  item.addEventListener("change", (event) => calculateTemp(event));
});
