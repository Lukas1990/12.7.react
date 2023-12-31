import temperature from "../../img/temperature.gif";
import wind from "../../img/wind.gif";
import partly_cloudy from "../../img/partly_cloudy.gif";
import rain from "../../img/rain.gif";
import snow from "../../img/snow.gif";

import GetWeather from "./GetWeather"
import ListWeather from "./ListWeather"

import {useState} from "react"

function WeatherForecast(props) {

  const {phrase} = props

  const [weatherData, setWeatherData] = useState()

  const handleWeatherData = (data) => {
    setWeatherData(data)
  }

  return (
    <div className="kontajner" id="predpoved">
      <h2>{phrase["Weather forecast"]}</h2>

      <GetWeather onSubmitData={handleWeatherData} phrase={phrase} />
      <ListWeather weatherData={weatherData} phrase={phrase} />
      
      <p>{phrase["The data is obtained"]} <strong><a href="https://open-meteo.com/">open-meteo.com</a></strong></p>
    </div>
  );
}

export default WeatherForecast;
