async function getWeather() {

    const city = document.getElementById("cityInput").value;

    const error = document.getElementById("error");

    if (city.trim() === "") {
        error.textContent = "Please enter a city name.";
        return;
    }

    error.textContent = "";

    try {

        // Get city location
        const locationResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
        );

        const locationData = await locationResponse.json();

        if (!locationData.results) {
            error.textContent = "City not found.";
            return;
        }

        const location = locationData.results[0];

        const latitude = location.latitude;
        const longitude = location.longitude;

        // Get weather
        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`
        );

        const weatherData = await weatherResponse.json();

        const current = weatherData.current;

        document.getElementById("city").textContent =
            location.name;

        document.getElementById("temperature").textContent =
            current.temperature_2m + " °C";

        document.getElementById("humidity").textContent =
            current.relative_humidity_2m + "%";

        document.getElementById("wind").textContent =
            current.wind_speed_10m + " km/h";

        const weatherInfo =
            getWeatherDescription(current.weather_code);

        document.getElementById("condition").textContent =
            weatherInfo.text;

        document.getElementById("icon").textContent =
            weatherInfo.icon;

    } catch (error) {

        document.getElementById("error").textContent =
            "Unable to get weather data.";

    }
}


function getWeatherDescription(code) {

    if (code === 0) {
        return {
            text: "Clear Sky",
            icon: "☀️"
        };
    }

    if (code >= 1 && code <= 3) {
        return {
            text: "Partly Cloudy",
            icon: "🌤️"
        };
    }

    if (code >= 45 && code <= 48) {
        return {
            text: "Foggy",
            icon: "🌫️"
        };
    }

    if (code >= 51 && code <= 67) {
        return {
            text: "Rain",
            icon: "🌧️"
        };
    }

    if (code >= 71 && code <= 77) {
        return {
            text: "Snow",
            icon: "❄️"
        };
    }

    if (code >= 80 && code <= 82) {
        return {
            text: "Rain Showers",
            icon: "🌦️"
        };
    }

    if (code >= 95) {
        return {
            text: "Thunderstorm",
            icon: "⛈️"
        };
    }

    return {
        text: "Unknown",
        icon: "🌤️"
    };
}