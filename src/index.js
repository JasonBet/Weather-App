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

const displayDiv = document.createElement("div");
document.body.appendChild(displayDiv);

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const searchLocation = formData.get("location");
    let weather = await getWeather(searchLocation);
    let userData = filterWeatherData(weather);
    console.log(userData); 
    displayWeatherData(userData);
});

