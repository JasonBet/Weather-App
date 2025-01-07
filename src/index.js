import "./styles.css";
import { getWeather } from "./getWeather.js";
import { filterWeatherData } from "./filterWeatherData.js";
import { displayWeatherData } from "./displayWeatherData.js";
import { displayGif } from "./displayGif.js";

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
displayDiv.classList.add("display-temp-div");
const displayGifDiv = document.createElement("div");
displayGifDiv.classList.add("display-gif-div");
displayGifDiv.id = "gif-div";
document.body.appendChild(displayDiv);
document.body.appendChild(displayGifDiv);

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const searchLocation = formData.get("location");
    let weather = await getWeather(searchLocation);
    let userData = filterWeatherData(weather);
    const isFahrenheit = toggleTemp.textContent === "Fahrenheit" ? true : false;
    let phrase = "Weather";
    if(userData.temp <= -10) {
        phrase = "Very cold weather";
    } else if(userData.temp <= 10) {
        phrase = "Cold weather";
    } else if(userData.temp <= 15) {
        phrase = "Cool weather";
    } else if(userData.temp <= 21) {
        phrase = "Good weather";
    } else if(userData.temp <= 26) {
        phrase = "Warm weather";
    } else if(userData.temp <= 31.0) {
        phrase = "Hot weather";
    } else if(userData.temp > 31.0) {
        phrase = "Very hot weather";
    }
    console.log(phrase);
    displayWeatherData(userData, isFahrenheit);
    displayGif(phrase);
});

