import './style.css';
import renderWeatherData from './renderWeatherDom.js';
import processDataJSON from './processJson.js';
const key = 'fa27276d62f44a5a923174621242903';

async function fetchWeatherData(city) {
    try {
        const respond = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`,
        );

        const processed = await processDataJSON(respond);
        renderWeatherData(processed);
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const city = document.querySelector('.search_bar').value;
        fetchWeatherData(city);
    });
});
