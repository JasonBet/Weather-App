// displayWeatherData.js
export function displayWeatherData(filteredData, isFahrenheit) {
    let tempUnit = "C";
    if(isFahrenheit) {
        filteredData.temp = ((filteredData.temp * 9.0 / 5.0) + 32.0);
        tempUnit = "F";
    }
    const display = document.querySelector("div");
    display.innerHTML = "";
    const temperature = document.createElement("h2");
    temperature.textContent = `Temperature: ${filteredData.temp} ${tempUnit}`;
    const feelsLike = document.createElement("h2");
    feelsLike.textContent = `Feels like: ${filteredData.feelsLike}`;
    const humidity = document.createElement("h2");
    humidity.textContent = `Humidity: ${filteredData.humidity}`;
    const cloudCover = document.createElement("h2");
    cloudCover.textContent = `Cloud Cover: ${filteredData.cloudCover}`;


    display.appendChild(temperature);
    display.appendChild(feelsLike);
    display.appendChild(humidity);
    display.appendChild(cloudCover);
}