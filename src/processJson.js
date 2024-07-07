export default async function processDataJSON(data) {
    const weatherData = {
        location: data.location.name,
        regiom: data.location.region,
        weatherCondition: data.current.condition.text,
        temperatureC: data.current.temp_c,
        temperatureF: data.current.temp_f,
        feelsLikeC: data.current.feelslike_c,
        feelsLikeF: data.current.feelslike_f,
        humidity: data.current.humidity,
        wind: data.current.wind_kph,
        cloud: data.current.cloud,
        precip_mm: data.current.precip_mm,
        uv: data.current.uv,
        visibility: data.current.vis_km,
        icon: data.current.condition.icon,
        time: data.location.localtime,
    };

    return weatherData;
}
