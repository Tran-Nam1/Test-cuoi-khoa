import React from 'react';

const WeatherInfo = ({ weatherData }) => {
  return (
    <div>
      <h2>
        {weatherData.name}, {weatherData.sys.country}
      </h2>
      <h3>{Math.round(weatherData.main.temp)}°C</h3>
      <p>{weatherData.weather[0].main}</p>
    </div>
  );
};

export default WeatherInfo;