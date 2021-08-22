/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-console */
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { getFullDate, getTime } from '../../utils/date';
import { Weather } from '../../services/api';
import { iconCodes } from '../../assets/IconCodes/IconCodes';
import { filterHourlyWeatherBasedOnCurrentTime } from '../../utils/filteredDate';

import './weatherPage.css';

export const WeatherPage = (): JSX.Element => {
  const params = useParams<{ city: string }>();
  const [fullDate, setFullDate] = React.useState(getFullDate());
  const [weather, setWeather] = React.useState<Weather>();

  React.useEffect(() => {
    fetch(`https://wttr.in/${params.city}?format=j1`)
      .then((responce) => responce.json())
      .then((json: Weather) => {
        setWeather(json);
        console.log(json.weather);
      })
      .catch((error) => console.log(error));
  }, [params.city]);

  React.useEffect(() => {
    const checkTime = window.setInterval(() => setFullDate(getFullDate()), 10000);
    return () => {
      clearInterval(checkTime);
    };
  }, []);

  console.log(params);

  const hourlyWeather = filterHourlyWeatherBasedOnCurrentTime(weather?.weather ?? []);

  return (
    <div className="weather-page">
      <div className="weather-page-top">
        <div className="top-left">
          <div className="time-date">
            <span className="time">{fullDate.time}</span>
            <span className="date">
              {fullDate.weekday}, {fullDate.day} {fullDate.month} {fullDate.year}
            </span>
          </div>
          <div className="todo-list">
            <button type="button" className="button-next">
              NEXT
            </button>
            <div className="item-list">
              <span className="item-time">16:30</span>
              <span className="item-text">Stay at Bohem Art Hotel</span>
            </div>
          </div>
        </div>
        <div className="city-weather">
          <img
            src={iconCodes[Number(weather?.current_condition[0].weatherCode)]}
            alt="weather"
            className="weather-icon"
          />
          <span className="weather-state">{weather?.current_condition[0].weatherDesc[0].value}</span>
          <span className="location">
            {weather?.nearest_area[0].region[0].value}, {weather?.nearest_area[0].country[0].value}
          </span>
          <span className="temperature">{weather?.current_condition[0].temp_C}°</span>
        </div>
      </div>
      <div className="weekline">
        {hourlyWeather.map((item) => (
          <div className="day">
            <span className="weekday">{getTime(item.time)}</span>
            <img src={iconCodes[Number(item.weatherCode)]} alt="weather" className="day-weather-icon" />
            <span className="day-temperature">{item.tempC}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
