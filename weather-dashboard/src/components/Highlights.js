import React from "react";
import humidityImg from "../assets/humidity.png";
import pressureImg from "../assets/pressure-gauge.png";
import airImg from "../assets/air-purifier.png";
import windImg from "../assets/wind.png";
import visibilityImg from "../assets/visibility-off.png";
import "./weather.css";
import { useSelector } from "react-redux";

const Highlights = () => {
  const weatherData = useSelector((state) => state.weather.weatherData);

  const todayData = weatherData ? weatherData[0] : null;
  const { main, wind, visibility } = todayData || {};
  const airQuality = 50;

  const cardData = [
    {
      title: "Humidity",
      value: main?.humidity ? `${main.humidity}%` : "N/A",
      status: "Normal",
      image: humidityImg,
    },
    {
      title: "Pressure",
      value: main?.pressure ? `${main.pressure} hPa` : "N/A",
      status: "Stable",
      image: pressureImg,
    },
    {
      title: "Wind Speed",
      value: wind?.speed ? `${wind.speed} km/h` : "N/A",
      status: "Breezy",
      image: windImg,
    },
    {
      title: "Visibility",
      value: visibility ? `${visibility / 1000} km` : "N/A",
      status: "Moderate",
      image: visibilityImg,
    },
    {
      title: "Air Quality",
      value: airQuality ? airQuality : "N/A",
      status: airQuality > 100 ? "Unhealthy" : "Healthy",
      image: airImg,
    },
  ];

  return (
    <>
      <div className="row mb-3">
        <div className="col-12 col-md-6 d-flex align-items-start">
          <h4 className="highlightsTitle">
            <b>Today's Highlights</b>
          </h4>
        </div>
      </div>
      <div className="row pt-2">
        {cardData.map((data, index) => (
          <div
            key={index}
            className="col-12 col-md-4 d-flex justify-content-center mb-4"
          >
            <div className="card highlight-card">
              <div className="d-flex align-items-center">
                <div className="image-container">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="highLightImg"
                  />
                </div>
                <div className="text-container">
                  <h5 className="card-title text-center">{data.title}</h5>
                  <h4 className="card-value text-center">
                    <b>{data.value}</b>
                  </h4>
                  <h5 className="card-status text-center">{data.status}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Highlights;
