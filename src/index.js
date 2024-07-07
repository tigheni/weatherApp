import './style.css';
import renderWeatherData from './renderWeatherDom.js';
import processDataJSON from './processJson.js';

const key = 'fa27276d62f44a5a923174621242903';
const weatherCard = document.querySelector('.weather_card');
const loadingIndicator = document.querySelector('.loader-container');
const weatherDataContainer = document.querySelector('.weather_data');

async function fetchWeatherData(city) {
    showLoading();
    try {
        // Simulate loading with a timeout
        await new Promise((resolve) => setTimeout(resolve, 200));

        const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`,
        );

        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();

        console.log('data', data);

        const processed = await processDataJSON(data);

        console.log('processed', processed);

        renderWeatherData(processed);
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
    } finally {
        document.querySelector('.search_bar').value = '';
        hideLoading();
    }
}

function showLoading() {
    loadingIndicator.style.display = 'flex';
    weatherDataContainer.style.display = 'none';
}

function hideLoading() {
    loadingIndicator.style.display = 'none';
    weatherDataContainer.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const city = document.querySelector('.search_bar').value;
        fetchWeatherData(city);
    });
});
