const WeatherDisplay = ({ weatherData }) => {
  return (
    <div className="container">
      <div className="top">
        <div className="location">
          <p>{weatherData.name}</p>
        </div>
        <div className="temp">
          {weatherData.main && <h1>{weatherData.main.temp.toFixed()}°C</h1>}
        </div>
        <div className="description">
          {weatherData.weather ? <p>{weatherData.weather[0].main}</p> : null}
        </div>
      </div>

      {weatherData.name !== undefined && (
        <div className="bottom">
          <div className="feels">
            {weatherData.main && <p>{weatherData.main.temp.toFixed()}°C</p>}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {weatherData.main ? (
              <p className="bold">{weatherData.main.humidity}%</p>
            ) : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {weatherData.wind ? (
              <p className="bold">{weatherData.wind.speed.toFixed()} MPH</p>
            ) : null}
            <p>Wind Speed</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default WeatherDisplay;
