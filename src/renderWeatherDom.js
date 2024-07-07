const locationInfo = document.querySelector('.localisation_span');
export default function renderWeatherData(weatherData) {
    const weatherDataContainer = document.querySelector('.weather_data');
    weatherDataContainer.innerHTML = '';
    weatherDataContainer.classList.add('active_weather_card');
    const currcity = weatherData.location + ',' + weatherData.regiom;

    locationInfo.innerHTML = `${currcity}`;

    //dom manipulation

    const temp_weather = document.createElement('div');
    temp_weather.classList.add('temp_weather');
    const weather_icon = document.createElement('div');
    weather_icon.classList.add('weather_icon');
    const weatherIcon = document.createElement('img');
    weatherIcon.src = weatherData.icon;
    weatherIcon.classList.add('weather_icon');
    weatherIcon.alt = '';
    weather_icon.appendChild(weatherIcon);
    const weather_info = document.createElement('div');
    weather_info.classList.add('weather_info');
    const temperature = document.createElement('div');
    temperature.classList.add('temperature');
    const temp = document.createElement('h2');
    //
    const celtofehr = document.querySelector('.checkboxf');
    celtofehr.addEventListener('change', () => {
        if (celtofehr.checked) {
            temp.innerHTML = `${weatherData.temperatureF}°`;
        } else {
            temp.innerHTML = `${weatherData.temperatureC}°`;
        }
    });
    //

    temp.innerHTML = `${weatherData.temperatureC}°`;
    //
    //

    temperature.appendChild(temp);
    const description = document.createElement('div');
    description.classList.add('description');
    const weather = document.createElement('h3');
    weather.innerHTML = `${weatherData.weatherCondition}`;

    description.appendChild(weather);
    weather_info.append(temperature, description);
    temp_weather.append(weather_icon, weather_info);

    const wind_humidity = document.createElement('div');
    wind_humidity.classList.add('wind_humidity');
    const wind = document.createElement('div');
    wind.classList.add('wind');
    const windIcon = document.createElement('i');
    windIcon.classList.add('fa-solid', 'fa-wind');

    wind.appendChild(windIcon);
    const windSpeed = document.createElement('span');
    windSpeed.innerHTML = `${weatherData.wind}`;
    wind.appendChild(windSpeed);
    const humidity = document.createElement('div');
    humidity.classList.add('humidity');
    const humidityIcon = document.createElement('i');
    humidityIcon.classList.add('fa-solid', 'fa-droplet');

    humidity.appendChild(humidityIcon);
    const hum = document.createElement('span');
    hum.classList.add('hum');
    hum.innerHTML = `${weatherData.humidity}%`;
    humidity.appendChild(hum);
    wind_humidity.append(wind, humidity);

    const time = document.createElement('div');
    time.classList.add('time');
    time.innerHTML = `${weatherData.time}`;

    weatherDataContainer.append(temp_weather, wind_humidity, time);
}
