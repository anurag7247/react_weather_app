import React from 'react';
import './weatherDisplay.css';
import weathericon from '../Images/weather-app.png';
import cityicon from '../Images/cityscape.png';
import humidity from '../Images/air.png';
import windicon from '../Images/wind.png';

const WeatherDisplay = ({ cityName, icons, weather, temp, feellike, humi, wind, currentFormattedDate, currentFormattedTime }) => {
  return (
    <div className="col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-4">
      <div className="card border-danger mb-3">
        <div className="card-header text-center">
          <h2>
            Current weather
            <img src={weathericon} style={{ height: '40px', width: '40px' }} alt="weather icon" />
          </h2>
        </div>
        <div className="card-body">
          <div className="bg-opacity" style={{ height: "60px", width: "90%" }}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <img src={icons} alt="weather icon" />
                {weather}
              </div>
              <div>
                <p style={{marginRight:"10px",marginTop:"5px"}} className="text-center">{currentFormattedDate()}<br />
                  {currentFormattedTime()}</p>
              </div>
            </div>
          </div>

          <br />
          <div className="bg-opacity text-center" style={{ width: "120px" }}>
            <h2>{temp}°C</h2>
            <p>
              Feels like
              <br />
              {feellike}°C
            </p>
          </div>

          <div className="w-100 bg-opacity text-center">
            <div className="row">
              <div className="col-4 col-md-4 mb-md-0">
                <p style={{paddingTop:"12px"}}>
                  City
                  <img src={cityicon} style={{ height: '25px', width: '25px'}} alt="city icon" />
                  <br />
                  {cityName}
                </p>
              </div>
              <div className="col-4 col-md-4 mb-md-0">
                <p style={{paddingTop:"12px"}}>
                  Humidity
                  <img src={humidity} style={{ height: '25px', width: '25px' }} alt="air icon" />
                  <br />
                  {humi}%
                </p>
              </div>
              <div className="col-4 col-md-4">
                <p style={{paddingTop:"12px"}}>
                  Wind
                  <img src={windicon} style={{ height: '25px', width: '25px' }} alt="wind icon" />
                  <br />
                  {wind}km/h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
