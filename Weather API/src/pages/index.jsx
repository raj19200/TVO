import { useState } from "react";
import CityInput from "../components/cityInput";
import WeatherDisplay from "../components/weatherDisplay";
import axios from "axios";

const Home = () => {
  //   const response = await axios.get(
  //     `https://api.openweathermap.org/data/2.5/weather?q=windsor&units=metric&appid=${
  //       import.meta.env.VITE_WEATHER_API_KEY
  //     }`
  //   );
  //   console.log(response.data);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(true);

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      setWeatherData(response.data);
      setError(false); // Clear previous errors
    } catch (err) {
      setError(true);
      setWeatherData(null);
    }
  };
  return (
    <div className="app">
      <CityInput onCityChange={fetchWeather} />
      {error ? (
        <h3>City not found! Please try again later</h3>
      ) : (
        <WeatherDisplay weatherData={weatherData} />
      )}
    </div>
  );
};

export default Home;
