// UI.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputBox from './InputBox';
import WeatherDisplay from './WeatherDisplay';
import speakerIcon from '../Images/pngwing.com.png'
const UI = () => {
  let [cityName, updateCityName] = useState('');
  let [weatherData, updateWeatherData] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [spokenText, setSpokenText] = useState('');

  const submit = () => {
    Api();
  };

  const Api = () => {
    axios.get(`https://api.weatherapi.com/v1/current.json?key=d384dff0c77c4b33963131810241001&q=${cityName}/`).then((response) => {
      const data = response.data;
      const spokenText = `The temperature in ${cityName} is ${data.current.temp_c} degrees Celsius jay shree raam.`;
      setSpokenText(spokenText); 
      updateWeatherData({
        cityName: cityName,
        icons: data.current.condition.icon,
        weather: data.current.condition.text,
        temp: data.current.temp_c,
        feellike: data.current.feelslike_c,
        humi: data.current.humidity,
        wind: data.current.wind_kph,
      });
    });
  };

  const speakTemperature = () => {
    if ('speechSynthesis' in window) {
      const synthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(spokenText);
      synthesis.speak(utterance);
    } else {
      console.error('Speech synthesis not supported');
    }
  };

  const currentFormattedDate = () => {
    return currentTime.toLocaleDateString();
  };

  const currentFormattedTime = () => {
    return currentTime.toLocaleTimeString();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <InputBox cityName={cityName} updateCityName={updateCityName} onSubmit={submit} />
        </div>
        <div className="row" id="outPut">
          {weatherData && (
            <>
              <WeatherDisplay
                cityName={weatherData.cityName}
                icons={weatherData.icons}
                weather={weatherData.weather}
                temp={weatherData.temp}
                feellike={weatherData.feellike}
                humi={weatherData.humi}
                wind={weatherData.wind}
                currentFormattedDate={currentFormattedDate}
                currentFormattedTime={currentFormattedTime}
              />
              <button onClick={speakTemperature} className="speaker-button btn btn-danger" style={{width:"50px",height:"50px",borderRadius:"60px"}}>
                <img style={{width:"35px",height:"35px", marginLeft:"-17.5px", marginTop:"-5px"}} src={speakerIcon} alt="" />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UI;
