import "./styles.css";
import { getWeather } from "./getWeather.js";
import { filterWeatherData } from "./filterWeatherData.js";

let weather = await getWeather("los angeles");
let userData = filterWeatherData(weather);
console.log(userData);
