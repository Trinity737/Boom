import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "91353889e1fe50ca6a1357473840b223";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="Weather-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
