import React from 'react';

const WeatherDetails = ({ weatherData }) => {
    return (
        <div>
            <p>
                <i className="fa fa-tint" aria-hidden="true"></i> Humidity:{" "}
                {weatherData.main.humidity}%
            </p>
            <p>
                <i className="fa fa-thermometer-half" aria-hidden="true"></i> Pressure:{" "}
                {weatherData.main.pressure} hPa
            </p>
            <p>
                <i className="fa fa-wind" aria-hidden="true"></i> Wind Speed:{" "}
                {weatherData.wind.speed} m/s
            </p>
        </div>
    );
};

export default WeatherDetails;