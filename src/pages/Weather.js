import React, { useState } from 'react';
import { fetachWeather } from '../api/fetchWeather';
import './Weather.css';
export const Weather = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetachWeather(query);
      setWeather(data);
      setQuery('');
    }
  };
  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => handleChange(e)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg; C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png
`}
              alt={weather.weather[0].main}
            />
            <p>{weather.weather[0].main}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export { Weather as default } from './Weather';
