import { useState } from "react";

const CityInput = ({ onCityChange }) => {
  const [city, setCity] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city) {
      onCityChange(city);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <div className="search">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleCityChange}
            required
          />
          <button type="submit" className="submit-button"></button>
        </div>
      </form>
    </div>
  );
};
export default CityInput;
