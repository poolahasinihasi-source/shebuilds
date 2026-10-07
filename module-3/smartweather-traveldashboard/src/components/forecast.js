function Forecast({ forecast }) {
  const dailyForecast = forecast.filter(
    (item, index) => index % 8 === 0
  );

  return (
    <section className="forecast-section">

      <h2>📅 Weather Forecast</h2>

      <div className="forecast-container">

        {dailyForecast.slice(0, 5).map((item, index) => {
          const date = new Date(item.dt * 1000);

          const day = date.toLocaleDateString("en-US", {
            weekday: "short"
          });

          const icon =
            `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

          return (
            <div
              className="forecast-card"
              key={index}
            >

              <h3>{day}</h3>

              <img
                src={icon}
                alt={item.weather[0].description}
              />

              <h3>
                {Math.round(item.main.temp)}°C
              </h3>

              <p>
                {item.weather[0].description}
              </p>

              <p>
                💧 {item.main.humidity}%
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default Forecast;