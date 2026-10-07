import { useState } from "react";

import SearchBar from "./components/searchbar";
import CurrentWeather from "./components/currentweather";
import Forecast from "./components/forecast";
import TravelSuggestion from "./components/travelsuggestion";

import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // IMPORTANT:
  // Put your NEW OpenWeatherMap API key between the quotes.
  const API_KEY = "f0f03bd371853db94828fd3b0858c046";

  const searchWeather = async () => {
    if (city.trim() === "") {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const weatherURL =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

      const forecastURL =
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

      // Current weather
      const weatherResponse = await fetch(weatherURL);

      if (weatherResponse.status === 401) {
        throw new Error("API_KEY_ERROR");
      }

      if (weatherResponse.status === 404) {
        throw new Error("CITY_NOT_FOUND");
      }

      if (!weatherResponse.ok) {
        throw new Error("WEATHER_ERROR");
      }

      const weatherData = await weatherResponse.json();

      // Forecast
      const forecastResponse = await fetch(forecastURL);

      if (forecastResponse.status === 401) {
        throw new Error("API_KEY_ERROR");
      }

      if (!forecastResponse.ok) {
        throw new Error("FORECAST_ERROR");
      }

      const forecastData = await forecastResponse.json();

      setWeather(weatherData);
      setForecast(forecastData.list);
      setError("");

    } catch (error) {
      console.error(error);

      setWeather(null);
      setForecast([]);

      if (error.message === "API_KEY_ERROR") {
        setError(
          "Invalid or inactive API key. Please check your OpenWeatherMap API key."
        );
      } else if (error.message === "CITY_NOT_FOUND") {
        setError("City not found. Please check the city name.");
      } else {
        setError("Unable to load weather data. Please try again.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">

      <header className="header">
        <h1>🌤️ Smart Weather & Travel Dashboard</h1>

        <p>
          Check weather conditions and get smart travel suggestions
        </p>
      </header>

      <main>

        <SearchBar
          city={city}
          setCity={setCity}
          searchWeather={searchWeather}
        />

        {loading && (
          <p className="loading">
            Loading weather information...
          </p>
        )}

        {error && (
          <p className="error">
            ❌ {error}
          </p>
        )}

        {weather && (
          <>
            <CurrentWeather weather={weather} />

            <TravelSuggestion weather={weather} />

            <Forecast forecast={forecast} />
          </>
        )}

      </main>

      <footer>
        <p>Smart Weather & Travel Dashboard</p>
      </footer>

    </div>
  );
}

export default App;