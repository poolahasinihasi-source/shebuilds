function TravelSuggestion({ weather }) {
  const temperature = weather.main.temp;
  const condition = weather.weather[0].main.toLowerCase();

  let suggestion = "";

  if (condition.includes("thunderstorm")) {
    suggestion =
      "⛈️ Thunderstorm expected. Avoid outdoor activities and open areas. Indoor activities are recommended.";
  } else if (condition.includes("rain")) {
    suggestion =
      "🌧️ Rainy weather today. Carry an umbrella or raincoat. Indoor attractions, museums and cafes are good travel options.";
  } else if (temperature > 32) {
    suggestion =
      "🔥 It is very hot today. Stay hydrated and use sunscreen. Prefer morning or evening sightseeing.";
  } else if (temperature < 15) {
    suggestion =
      "🧥 It is cold today. Carry warm clothes and consider indoor sightseeing activities.";
  } else if (condition.includes("clear")) {
    suggestion =
      "☀️ Excellent weather for travelling! You can enjoy sightseeing, photography, walking tours and outdoor activities.";
  } else {
    suggestion =
      "☁️ The weather is comfortable. You can explore local attractions and enjoy sightseeing.";
  }

  return (
    <section className="travel-card">
      <h2>✈️ Smart Travel Recommendation</h2>

      <p>{suggestion}</p>
    </section>
  );
}

export default TravelSuggestion;