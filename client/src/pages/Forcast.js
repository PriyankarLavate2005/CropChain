import React, { useState, useEffect } from 'react';
import './forcast.css';

const Forecast = () => {
  const [city, setCity] = useState('New York');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = '0c005fa00b6a2d265bfea09a97e0d15f';

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Get current weather
      const currentWeatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!currentWeatherResponse.ok) {
        throw new Error('City not found or API error');
      }

      const currentWeatherData = await currentWeatherResponse.json();
      setWeatherData(currentWeatherData);

      // Get forecast for next 5 days
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!forecastResponse.ok) {
        throw new Error('Forecast data not available');
      }

      const forecastData = await forecastResponse.json();
      setForecastData(forecastData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  };

  const processForecastData = (forecastList) => {
    const dailyForecasts = [];
    const dates = {};

    // Group forecasts by day and select one forecast per day (noon)
    forecastList.forEach((item) => {
      const date = new Date(item.dt * 1000).toDateString();

      // If we haven't seen this date or this is closer to noon
      if (
        !dates[date] ||
        Math.abs(new Date(item.dt * 1000).getHours() - 12) <
          Math.abs(new Date(dates[date].dt * 1000).getHours() - 12)
      ) {
        dates[date] = item;
      }
    });

    // Convert to array and take first 5 days
    for (const date in dates) {
      dailyForecasts.push(dates[date]);
      if (dailyForecasts.length >= 5) break;
    }

    return dailyForecasts;
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="forecast-container">
      <h1>Weather Forecast</h1>

      <div className="container">
        <div className="search-box">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter city name..."
          />
          <button onClick={fetchWeather}>Search</button>
        </div>

        {loading && <div className="loading">Loading weather data...</div>}

        {error && <div className="error">Error: {error}</div>}

        {weatherData && forecastData && !loading && !error && (
          <>
            <div className="current-weather">
              <h2>
                {weatherData.name}, {weatherData.sys.country}
              </h2>
              <div className="weather-info">
                <div className="temp">{Math.round(weatherData.main.temp)}°C</div>
                <div className="details">
                  <div>Feels like: {Math.round(weatherData.main.feels_like)}°C</div>
                  <div>Humidity: {weatherData.main.humidity}%</div>
                  <div>Wind: {weatherData.wind.speed} m/s</div>
                  <div>{weatherData.weather[0].description}</div>
                </div>
                <img
                  className="weather-icon"
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt={weatherData.weather[0].description}
                />
              </div>
            </div>

            <h2>5-Day Forecast</h2>
            <div className="forecast">
              {processForecastData(forecastData.list).map((day) => (
                <div className="forecast-day" key={day.dt}>
                  <div className="date">{formatDate(day.dt)}</div>
                  <img
                    className="weather-icon"
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt={day.weather[0].description}
                  />
                  <div>
                    {Math.round(day.main.temp_max)}°C / {Math.round(day.main.temp_min)}°C
                  </div>
                  <div>{day.weather[0].description}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Forecast;