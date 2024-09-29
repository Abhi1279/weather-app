import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCityName, fetchWeather } from "../store/weatherSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mapImg from '../assets/mark-on-map.png';

const WeatherCard = () => {
  const dispatch = useDispatch();

  const cityName = useSelector((state) => state.weather.cityName);
  const weatherData = useSelector((state) => state.weather.weatherData);
  const error = useSelector((state) => state.weather.error);

  const [inputCity, setInputCity] = useState(cityName);

  useEffect(() => {
    dispatch(fetchWeather("Pune"));
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error}`);
    }
  }, [error]);

  const handleChangeForCity = (e) => {
    setInputCity(e.target.value);
  };

  const handleSubmit = () => {
    const isValidInput = /^[a-zA-Z\s]*$/.test(inputCity);

    if (!isValidInput) {
      toast.error("Please enter a valid city name (only letters and spaces).");
      return;
    }

    if (inputCity) {
      dispatch(setCityName(inputCity));
      dispatch(fetchWeather(inputCity));
    }
  };

  return (
    <div className="col-12 col-md-4 weather-card">
      <div className="card weatherCard">
        <div className="d-flex justify-content-center" style={{ gap: "10px" }}>
          <input
            className="searchInput form-control"
            type="search"
            placeholder="Search for places..."
            aria-label="Search"
            value={inputCity}
            onChange={handleChangeForCity}
          />
          <button
            className="btn searchBtn"
            type="submit"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
        {!error && weatherData && (
          <div className="weather-info text-center pt-4">
            <h5>
              <img src={mapImg} alt="no_img" className="img-responsive mapImg" />
              <span>{cityName}</span>
            </h5>
            <div className="imagDiv">
              <img
                src={`http://openweathermap.org/img/wn/${weatherData[0].weather[0].icon}@2x.png`}
                alt="Weather Icon"
                className="weatherImg img-responsive pt-3"
              />
            </div>
            <b>{weatherData[0].weather[0].description}</b>
            <h3>
              <span style={{ color: "#fff" }}><b>{weatherData[0].main.temp} °C</b></span>
            </h3>
            <p><b>Humidity: {weatherData[0].main.humidity}%</b></p>
            <p><b>Pressure: {weatherData[0].main.pressure} hPa</b></p>
            <p>
              <b>{new Intl.DateTimeFormat("en-US", {
                weekday: "long",
                timeZone: "Asia/Kolkata",
              }).format(new Date(weatherData[0].dt * 1000))}</b>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
