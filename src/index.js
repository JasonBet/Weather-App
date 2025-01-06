import "./styles.css";
import { getWeather } from "./getWeather.js";

let weather = await getWeather("los angeles");
console.log(weather);
