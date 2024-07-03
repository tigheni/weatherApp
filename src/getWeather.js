export default async function getWeather(city) {
    try {
        const respond = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=eefc10c72ce2598ac67db863e6a4c261`,
        );
        const data = await respond.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}
