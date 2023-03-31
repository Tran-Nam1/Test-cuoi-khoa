import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";
import WeatherDetails from "./WeatherDetails";
import './App.css'

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (e) => {
    e.preventDefault();
    const API_KEY = "be7c2643f6fe0c32eb7fe5035e5c8aa5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="App">
      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
      {weatherData && (
        <>
          <WeatherInfo weatherData={weatherData} />
          <WeatherDetails weatherData={weatherData} />
        </>
      )}
    </div>)}
export default WeatherApp
