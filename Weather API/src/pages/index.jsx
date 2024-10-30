import CityInput from "../components/cityInput";
import WeatherDisplay from "../components/weatherDisplay";

const Home = () => {
  return (
    <div className="app">
      <CityInput />
      <WeatherDisplay />
    </div>
  );
};
export default Home;
