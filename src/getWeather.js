// getWeather.js
export async function getWeather(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=YHRXS4ER4AQLQ9G4DWBYQWHVK&contentType=json
`);
    const weatherData = await response.json();
    return weatherData;
}
