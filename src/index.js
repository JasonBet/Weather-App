import "./styles.css";
import { getWeather } from "./getWeather.js";
import { filterWeatherData } from "./filterWeatherData.js";
import { displayWeatherData } from "./displayWeatherData.js";

const form = document.createElement("form");
form.noValidate = true;

const locationLabel = document.createElement("label");
locationLabel.textContent = "Enter a location to get the weather";
locationLabel.for = "location";
const locationInput = document.createElement("input");
locationInput.type = "text";
locationInput.name = "location";
const submitButton = document.createElement("button");
submitButton.textContent = "Submit";


form.appendChild(locationLabel);
form.appendChild(locationInput);
form.appendChild(submitButton);
document.body.appendChild(form);

const toggleTemp = document.createElement("button");
toggleTemp.textContent = "Celsius";
document.body.appendChild(toggleTemp);

toggleTemp.addEventListener("click", () => {
    if(toggleTemp.textContent === "Celsius"){
        toggleTemp.textContent = "Fahrenheit";
    } else {toggleTemp.textContent = "Celsius"};
    const submitFormEvent = new Event("submit", {bubbles: true, cancelable: true});
    form.dispatchEvent(submitFormEvent);
});

const displayDiv = document.createElement("div");
document.body.appendChild(displayDiv);

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const searchLocation = formData.get("location");
    let weather = await getWeather(searchLocation);
    let userData = filterWeatherData(weather);
    const isFahrenheit = toggleTemp.textContent === "Fahrenheit" ? true : false;
    console.log(isFahrenheit);
    displayWeatherData(userData, isFahrenheit);
});

