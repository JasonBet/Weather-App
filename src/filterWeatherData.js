// filterWeatherData.js
export function filterWeatherData(jsonData) {
    const filteredData = {
        temp: jsonData.days[0].temp,
        feelsLike: jsonData.days[0].feelslike,
        humidity: jsonData.days[0].humidity,
        cloudCover: jsonData.days[0].cloudcover
    };
    return filteredData;
}