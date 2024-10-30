import { useState } from "react";

const CityInput = () => {
  const [city, setCity] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleCityChange}
          required
        />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};
export default CityInput;
