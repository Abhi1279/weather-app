import React from "react";
// import sunImage from './assets/pngtree-sun-png-clipart-colored-png-image_5656301.png';
const Weather = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const cardData = [
    { title: "Humidity", value: "15%", status: "Normal" },
    { title: "Pressure", value: "1013 hPa", status: "Stable" },
    { title: "Wind Speed", value: "10 km/h", status: "Breezy" },
    { title: "Visibility", value: "10 km", status: "Clear" },
    { title: "UV Index", value: "5", status: "Moderate" },
    { title: "Air Quality", value: "Good", status: "Healthy" },
  ];

  return (
    <div className="container-fluid">
      <div className="row" style={{ backgroundColor: "#eeeee4" }}>
        <div className="col-12 col-md-4"></div>
        <div className="col-12 col-md-4 text-center">
          <h1>Weather Application</h1>
        </div>
        <div className="col-12 col-md-4"></div>
      </div>
      <div className="row">
        <div
          className="col-12 col-md-3"
          style={{
            height: "92.7vh",
            backgroundColor: "#f0f3fa",
            padding: "10px",
          }}
        >
          <div
            className="card"
            style={{
              padding: "20px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
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
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
            <div className="imagDiv">
              <img
                src=""
                alt="no-image"
                style={{ hieght: "300px", width: "200px", border: "1px solid" }}
              />
            </div>
            <div style={{ paddingTop: "10px" }}>
              <h1>12 °C</h1>
            </div>
            <div
              style={{ borderBottom: "1px solid #f0f3fa", paddingTop: "10px" }}
            >
              <h3>Monday, 16:00</h3>
            </div>
            <div style={{paddingTop:"10px"}}>
              <h5>Mostly Cloudy</h5>
            </div>
            <div style={{paddingTop:"10px"}}>
              <h5>Rain - 30%</h5>
            </div>
            <div className="" style={{paddingTop:"10px"}}>
              <h5>Pune, India</h5>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-9"
          style={{
            backgroundColor: "#abdbe3",
            paddingLeft: "55px",
            paddingRight: "55px",
            paddingTop: "15px",
          }}
        >
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="d-flex justify-content-start">
                <h4 style={{ borderBottom: "1px solid" }}>
                  Upcoming Week's Forecast
                </h4>
              </div>
            </div>
            <div className="col-12 col-md-4"></div>
            <div className="col-12 col-md-4">
              <div
                className="d-flex justify-content-end"
                style={{ gap: "20px" }}
              >
                <span
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "50%",
                    padding: "7px",
                  }}
                >
                  <b>°C</b>
                </span>
                <span
                  style={{
                    backgroundColor: "#fff",
                    color: "#000",
                    borderRadius: "50%",
                    padding: "7px",
                  }}
                >
                  <b>°F</b>
                </span>
              </div>
            </div>
          </div>

          <div className="row" style={{ paddingTop: "35px" }}>
            {days.map((day) => (
              <div
                key={day}
                className="col-12 col-md-6 col-lg-2 d-flex justify-content-center mb-4"
              >
                <div
                  className="card"
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    width: "180px",
                    padding: "10px",
                  }}
                >
                  <h5>{day}</h5>

                  <h5>15° 3°</h5>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-12 col-md-4">
              <div className="d-flex justify-content-start">
                <h4 style={{ borderBottom: "1px solid" }}>
                  Today's HightLights
                </h4>
              </div>
            </div>
            <div className="col-12 col-md-4"></div>
          </div>
          <div className="row" style={{ paddingTop: "35px" }}>
            {cardData.map((data, index) => (
              <div
                key={index}
                className="col-md-4 d-flex justify-content-center mb-4"
              >
                <div
                  className="card"
                  style={{
                    width: "280px",
                    padding: "20px",
                    height: "180px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <h5>{data.title}</h5>
                  <h5>{data.value}</h5>
                  <h5>{data.status}</h5>
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
