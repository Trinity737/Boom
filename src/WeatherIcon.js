import React from "react";

import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "SCATTERED_CLOUDS_DAY",
    "03n": "SCATTERED_CLOUDS_NIGHT",
    "04d": "BROKEN_CLOUDS_DAY",
    "04n": "BROKEN_CLOUDS_NIGHT",
    "09d": "SHOWER_RAIN_DAY",
    "09n": "SHOWER_RAIN_NIGHT",
    "010d": "RAIN_DAY",
    "010n": "RAIN_NIGHT",
    "011d": "THUNDERSTORM_DAY",
    "011n": "THUNDERSTORM_NIGHT",
    "013d": "SNOW_DAY",
    "013n": "SNOW_NIGHT",
    "050d": "MIST_DAY",
    "050n": "MIST_NIGHT",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#1e1e1e"
      size={52}
      animate={true}
    />
  );
}
