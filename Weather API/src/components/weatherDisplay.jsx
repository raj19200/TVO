const WeatherDisplay = () => {
  return (
    <div className="container">
      <div className="top">
        <div className="location">
          <p>Toronto</p>
        </div>
        <div className="temp">
          <h1>22°F</h1>
        </div>
        <div className="description">sunny</div>
      </div>

      <div className="bottom">
        <div className="feels">
          <p className="bold">22°F</p>

          <p>Feels Like</p>
        </div>
        <div className="humidity">
          <p className="bold">22%</p>
          <p>Humidity</p>
        </div>
        <div className="wind">
          <p className="bold">14 MPH</p>

          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
