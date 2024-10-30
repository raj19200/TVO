const WeatherDisplay = ({ weatherData }) => {
  return (
    <div className="container">
      <div className="top">
        <div className="location">
          <p>{weatherData.name}</p>
        </div>
        <div className="temp">
          {weatherData.main ? (
            <h1>{weatherData.main.temp.toFixed()}°C</h1>
          ) : null}
        </div>
        <div className="description">
          {weatherData.weather ? <p>{weatherData.weather[0].main}</p> : null}
        </div>
      </div>

      {weatherData.name !== undefined && (
        <div className="bottom">
          <div className="feels">
            {weatherData.main ? (
              <p className="bold">{weatherData.main.temp.toFixed()}°C</p>
            ) : null}
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
// const WeatherDisplay = () => {
//   return (
//     <div className="container">
//       <div className="top">
//         <div className="location">
//           <p>Toronto</p>
//         </div>
//         <div className="temp">
//           <h1>22°F</h1>
//         </div>
//         <div className="description">sunny</div>
//       </div>

//       <div className="bottom">
//         <div className="feels">
//           <p className="bold">22°F</p>

//           <p>Feels Like</p>
//         </div>
//         <div className="humidity">
//           <p className="bold">22%</p>
//           <p>Humidity</p>
//         </div>
//         <div className="wind">
//           <p className="bold">14 MPH</p>

//           <p>Wind Speed</p>
//         </div>
//       </div>
//     </div>
//   );
// };

export default WeatherDisplay;
