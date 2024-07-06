export default function renderWeatherData(weatherData) {
    const weatherDataContainer = document.querySelector('.weather_card');

    const locationInfo = document.querySelector('.localisation_span');
    const currcity = weatherData.location + ',' + weatherData.regiom;
    locationInfo.innerHTML = `${currcity}`;
    weatherDataContainer.innerHTML = `
 <div class="temp_weather">
    <div class="weather_icon">
        <img
            src="${weatherData.icon}"
             class="weather_icon"
            alt=""
        />
    </div>
    <div class="weather_info">
        <div class="temperature">
            <h2>${weatherData.temperatureC}°</h2>
        </div>
        <div class="description">
            <h3>${weatherData.weatherCondition}</h3>
        </div>
    </div>
</div>
<div class="wind_humidity">
    <div class="wind">
        <i class="fa-solid fa-wind"></i>
        <span> ${weatherData.wind}</span>
    </div>
    <div class="humidity">
        <i class="fa-solid fa-droplet"></i>
        <span class="hum">${weatherData.humidity}%</span>
    </div>
</div>
<div class="time">15.15.2002</div>`;
}
