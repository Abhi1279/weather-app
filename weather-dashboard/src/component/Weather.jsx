import React from "react";

const Weather = () => {
    
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu","Fri"];

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
            backgroundColor: "#fff",
            padding: "10px",
          }}
        >
          <div className="d-flex justify-content-center" style={{ gap: "10px" }}>
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
              <div className="d-flex justify-content-end" style={{ gap: "20px" }}>
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

          <div className="row" style={{paddingTop:"35px"}}>
          {days.map((day) => (
            <div key={day} className="col-12 col-md-6 col-lg-2 d-flex justify-content-center mb-4">
              <div className="card" style={{ width: "180px", padding: "10px" }}>
                <h5>{day}</h5>
                <img src="" alt="no_image" style={{ height: "50px", width: "100%" }} />
                <h5>15° 3°</h5>
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
