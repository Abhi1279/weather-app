import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forecast = () => {
  const weatherData = useSelector((state) => state.weather.weatherData);
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
    toast("Temperature Unit Changed Successfully");
  };

  const convertTemperature = (temp) => (isCelsius ? temp : (temp * 9) / 5 + 32);

  if (!weatherData) return <div>No data available</div>;

  return (
    <>
      <ToastContainer />
      <div className="row mb-4 pt-2">
        <div className="row mb-3">
          <div className="col-md-6">
            <h4 className="foreCastTitle"><b>Upcoming Week's Forecast</b></h4>
          </div>
          <div className="col-md-6 text-end">
            {["C", "F"].map((unit, idx) => (
              <span
                key={unit}
                className={`badge p-2 ${
                  isCelsius === !idx
                    ? "bg-dark text-white"
                    : "bg-light text-dark"
                }`}
                onClick={toggleTemperatureUnit}
                style={{
                  cursor: "pointer",
                  marginRight: idx === 0 ? "10px" : "0",
                  border:"1px solid"
                }}
              >
                <b>°{unit}</b>
              </span>
            ))}
          </div>
        </div>
        {weatherData.map((forecast, index) => (
          <div
            key={index}
            className="col-6 col-md-4 col-lg-2 d-flex justify-content-center mb-3"
          >
            <div
              className="forCastCard card text-center"
            
            >
              <h5 className=""><b>{new Date(forecast.dt_txt).toLocaleDateString()}</b></h5>
              <img
                src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                alt="weather"
               className="forCastDynamicImg"
              />
              <h4>
               <b> {convertTemperature(forecast.main.temp).toFixed(1)}°
               {isCelsius ? "C" : "F"}</b>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Forecast;
