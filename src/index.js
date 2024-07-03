import './style.css';
import getWeather from './getWeather.js';
const city = 'mesra';
async function fetchWeatherData() {
    try {
        const weatherData = await getWeather(city);
        console.log(weatherData[0]);
        const { lat, lon } = weatherData[0];
        const respond = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=eefc10c72ce2598ac67db863e6a4c261`,
        );
        const data = await respond.json();
        console.log(data);
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
    }
}

fetchWeatherData();
