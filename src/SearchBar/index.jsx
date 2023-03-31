import React from 'react';

const SearchBar = ({ city, setCity, fetchWeather }) => {
  return (
    <form onSubmit={fetchWeather}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;