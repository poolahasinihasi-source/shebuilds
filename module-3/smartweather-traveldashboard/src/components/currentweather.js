function CurrentWeather({ weather }) {
  const iconCode = weather.weather[0].icon;

  const iconURL =
    `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <section className="weather-card">

      <h2>
        {weather.name}, {weather.sys.country}
      </h2>

      <div className="current-weather">

        <img
          src={iconURL}
          alt={weather.weather[0].description}
        />

        <div>

          <h3>
            {Math.round(weather.main.temp)}°C
          </h3>

          <p>
            {weather.weather[0].description}
          </p>

        </div>

      </div>

      <div className="weather-details">

        <div>
          <span>💧</span>

          <p>Humidity</p>

          <strong>
            {weather.main.humidity}%
          </strong>
        </div>

        <div>
          <span>💨</span>

          <p>Wind Speed</p>

          <strong>
            {weather.wind.speed} m/s
          </strong>
        </div>

        <div>
          <span>🌡️</span>

          <p>Feels Like</p>

          <strong>
            {Math.round(weather.main.feels_like)}°C
          </strong>
        </div>

      </div>

    </section>
  );
}

export default CurrentWeather;