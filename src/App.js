import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState(null); // State for weather data
  const [loading, setLoading] = useState(false); // State for loading spinner
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const fetchWeather = async (city) => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setWeatherData(response.data); // Update weather data state
    } catch (error) {
      alert('City not found! Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newTheme = !darkMode ? 'dark' : 'light';
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Save theme preference
  };

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setDarkMode(savedTheme === 'dark');
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <div className="App">
      {/* Dark mode toggle button */}
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />

      {/* Render spinner if loading */}
      {loading && <div className="spinner"></div>}

      {/* Render WeatherCard only when not loading */}
      {!loading && weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
