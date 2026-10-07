function SearchBar({ city, setCity, searchWeather }) {

  const handleKeyPress = (event) => {

    if (event.key === "Enter") {
      searchWeather();
    }

  };


  return (

    <div className="search-container">

      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(event) => setCity(event.target.value)}
        onKeyDown={handleKeyPress}
      />

      <button onClick={searchWeather}>
        🔍 Search
      </button>

    </div>

  );
}

export default SearchBar;

