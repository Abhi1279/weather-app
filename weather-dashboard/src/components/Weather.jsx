import React, { useState } from "react";
import visibilityImg from "../assets/visibility-off.png";
import humidityImg from "../assets/humidity.png";
import pressureImg from "../assets/pressure-gauge.png";
import airImg from "../assets/air-purifier.png";
import windImg from "../assets/wind.png";
import sunImg from "../assets/sun.png";
import "./weather.css";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

const cardData = [
  { title: "Humidity", value: "15%", status: "Normal", image: humidityImg },
  {
    title: "Pressure",
    value: "1013 hPa",
    status: "Stable",
    image: pressureImg,
  },
  { title: "Wind Speed", value: "10 km/h", status: "Breezy", image: windImg },
  {
    title: "Visibility",
    value: "5 km",
    status: "Moderate",
    image: visibilityImg,
  },
  { title: "Air Quality", value: "Good", status: "Healthy", image: airImg },
];
const Weather = () => {
  const [cityName, setCityName] = useState("");
  const [isCelsius, setIsCelsius] = useState(true);


  const handleChangeForCity = (e) => {
    setCityName(e.target.value);
  };
  const toggleTemperatureUnit = () => {
    setIsCelsius((prev) => !prev);
    toast("Temparture Unit Changed Sucessfully")
  };

  const handleSubmit = () => {
    console.log("Search Button Clicked");
  };
  return (
    
    <div className="container-fluid">
    <ToastContainer />
      <div className="row header">
        <div className="col-12 text-center">
          <h1>Weather Application</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 weather-card">
          <div className="card" style={{ padding: "20px" }}>
            <div
              className="d-flex justify-content-center"
              style={{ gap: "10px" }}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search for places..."
                aria-label="Search"
                style={{ borderRadius: "12px", width: "100%" }}
                value={cityName}
                onChange={handleChangeForCity}
              />
              <button
                className="btn btn-outline-primary"
                type="submit"
                onClick={handleSubmit}
              >
                Search
              </button>
            </div>
            <div className="imagDiv">
              <img
                src={sunImg}
                alt="Weather Logo"
                style={{ width: "auto", height: "300px" }}
                className="img-responsive pt-5"
              />
            </div>
            <div style={{ paddingTop: "10px" }}>
              <h1 style={{ fontSize: "60px" }}>
                12<sup style={{ fontSize: "30px" }}>°C</sup>
              </h1>
            </div>
            <div
              style={{ borderBottom: "1px solid #f0f3fa", paddingTop: "10px" }}
            >
              <h5>Monday, 16:00</h5>
            </div>
            <div style={{ paddingTop: "10px" }}>
              <h5>Mostly Cloudy</h5>
            </div>
            <div style={{ paddingTop: "10px" }}>
              <h5>Rain - 30%</h5>
            </div>
            <div style={{ paddingTop: "10px" }}>
              <h5>Pune, India</h5>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 main-card">
          <div className="row mb-3 align-items-start">
            <div className="col-12 col-md-6 d-flex align-items-start">
              <h4 className="m-0" style={{ borderBottom: "1px solid" }}>
                Upcoming Week's Forecast
              </h4>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-end">
              <span
                className={`badge badge-custom me-2 p-2 ${
                  isCelsius ? "bg-dark text-white" : "bg-light text-dark"
                }`}
                onClick={toggleTemperatureUnit}
                style={{ cursor: "pointer" }}
              >
                <b>°C</b>
              </span>
              <span
                className={`badge badge-custom p-2 ${
                  !isCelsius ? "bg-dark text-white" : "bg-light text-dark"
                }`}
                onClick={toggleTemperatureUnit}
                style={{ cursor: "pointer" }}
              >
                <b>°F</b>
              </span>
            </div>
          </div>
          <div className="row mb-4 pt-2">
            {days.map((day) => (
              <div
                key={day}
                className="col-6 col-md-4 col-lg-2 d-flex justify-content-center mb-3"
              >
                <div
                  className="card text-center"
                  style={{
                    boxShadow:
                      "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                    width: "100%",
                    padding: "10px",
                  }}
                >
                  <h5 className="pt-2">{day}</h5>
                  <img
                    src={sunImg}
                    className="img-responsive pt-1"
                    style={{ margin: "0 auto", height: "50px", width: "50%" }}
                  />
                  <h5 className="pt-2">15° 3°</h5>
                </div>
              </div>
            ))}
          </div>

          <div className="row mb-3">
            <div className="col-12 col-md-6 d-flex align-items-start">
              <h4 style={{ borderBottom: "1px solid" }}>Today's Highlights</h4>
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
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                    <div className="text-container">
                      <h5 className="card-title">{data.title}</h5>
                      <h5 className="card-value">{data.value}</h5>
                      <h5 className="card-status">{data.status}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
