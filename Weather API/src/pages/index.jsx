import { useState } from "react";
import CityInput from "../components/cityInput";
import WeatherDisplay from "../components/weatherDisplay";
import axios from "axios";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      setWeatherData(response.data);
      setError(null); // Clear previous errors
    } catch (err) {
      // Check if the error is a 404
      if (err.response && err.response.status === 404) {
        setError("City not found! Please try again.");
      } else {
        setError("An error occurred! Please try again later.");
      }
      setWeatherData(null);
    }
  };
  return (
    <div className="app">
      <CityInput onCityChange={fetchWeather} />
      {weatherData == null && error == null ? (
        <h3>Please Enter a city to view weather</h3>
      ) : error ? (
        <h3>
          Oops! We couldn&apos;t find that city. Double-check the name and try
          again!
        </h3>
      ) : (
        <WeatherDisplay weatherData={weatherData} />
      )}
    </div>
  );
};

export default Home;
