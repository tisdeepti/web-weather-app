import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const { name, main, weather, wind } = weatherData;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`; // Weather icon URL

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img src={iconUrl} alt="Weather Icon" style={{ width: '100px' }} /> {/* Display weather icon */}
      <p>{weather[0].description}</p>
      <h1>{Math.round(main.temp)}°C</h1>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
