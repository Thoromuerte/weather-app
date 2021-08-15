/* eslint-disable @typescript-eslint/no-floating-promises */
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { getFullDate } from '../../utils/date';
import { Weather } from '../../services/api';

import sunIconPath from '../../assets/icons/wi-day-sunny.svg';
import cloudIconPath from '../../assets/icons/wi-cloud.svg';
import fogIconPath from '../../assets/icons/wi-day-fog.svg';
import moonIconPath from '../../assets/icons/wi-night-clear.svg';

import './weatherPage.css';

export const WeatherPage = (): JSX.Element => {
  const params = useParams<{ city: string }>();
  const [fullDate, setFullDate] = React.useState(getFullDate());
  const [weather, setWeather] = React.useState<Weather>();

  React.useEffect(() => {
    fetch('https://wttr.in/Moscow?format=j1')
      .then((responce) => responce.json())
      .then((json: Weather) => setWeather(json));
  }, []);

  React.useEffect(() => {
    const checkTime = window.setInterval(() => setFullDate(getFullDate()), 10000);
    return () => {
      clearInterval(checkTime);
    };
  }, []);

  // eslint-disable-next-line no-console
  console.log(params);

  // {params.city}
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
          <img src={moonIconPath} alt="weather" className="weather-icon" />
          <span className="weather-state">Clear Sky</span>
          <span className="location">{params.city}</span>
          <span className="temperature">16°</span>
        </div>
      </div>
      {/* <div className="weather-page-bottom"> */}
      <div className="weekline">
        <div className="day">
          <span className="weekday">TODAY</span>
          <img src={moonIconPath} alt="weather" className="day-weather-icon" />
          <span className="day-temperature">21</span>
        </div>
        <div className="day">
          <span className="weekday">TODAY</span>
          <img src={cloudIconPath} alt="weather" className="day-weather-icon" />
          <span className="day-temperature">21</span>
        </div>
        <div className="day">
          <span className="weekday">TODAY</span>
          <img src={fogIconPath} alt="weather" className="day-weather-icon" />
          <span className="day-temperature">21</span>
        </div>
        <div className="day">
          <span className="weekday">TODAY</span>
          <img src={sunIconPath} alt="weather" className="day-weather-icon" />
          <span className="day-temperature">21</span>
        </div>
        <div className="day">
          <span className="weekday">TODAY</span>
          <img src={cloudIconPath} alt="weather" className="day-weather-icon" />
          <span className="day-temperature">21</span>
        </div>
        <div className="day">
          <span className="weekday">TODAY</span>
          <img src={sunIconPath} alt="weather" className="day-weather-icon" />
          <span className="day-temperature">21</span>
        </div>
        <div className="day">
          <span className="weekday">TODAY</span>
          <img src={sunIconPath} alt="weather" className="day-weather-icon" />
          <span className="day-temperature">21</span>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
