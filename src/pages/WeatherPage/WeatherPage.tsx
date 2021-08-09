import * as React from 'react';
import { useParams } from 'react-router-dom';

import './weatherPage.css';

export const WeatherPage = (): JSX.Element => {
  const params = useParams<{ city: string }>();

  // eslint-disable-next-line no-console
  console.log(params);

  // {params.city}
  return (
    <div className="weather-page">
      <div className="weather-page-top">
        <div className="top-left">
          <div className="time-date">
            <span className="time">00:29</span>
            <span className="date">Monday, 16 August 2021</span>
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
          <div className="weather-icon">*ICON*</div>
          <span className="weather-state">Clear Sky</span>
          <span className="location">{params.city}</span>
          <span className="temperature">16°</span>
        </div>
      </div>
      {/* <div className="weather-page-bottom"> */}
      <div className="weekline">
        <div className="day">
          <span className="weekday">TODAY</span>
          <div className="day-weather-icon">*ICON*</div>
          <span className="day-temperature">21</span>
        </div>
        <div className="day">
          <span className="weekday">TODAY</span>
          <div className="day-weather-icon">*ICON*</div>
          <span className="day-temperature">21</span>
        </div>
        <div className="day">
          <span className="weekday">TODAY</span>
          <div className="day-weather-icon">*ICON*</div>
          <span className="day-temperature">21</span>
        </div>
        <div className="day">
          <span className="weekday">TODAY</span>
          <div className="day-weather-icon">*ICON*</div>
          <span className="day-temperature">21</span>
        </div>
        <div className="day">
          <span className="weekday">TODAY</span>
          <div className="day-weather-icon">*ICON*</div>
          <span className="day-temperature">21</span>
        </div>
        <div className="day">
          <span className="weekday">TODAY</span>
          <div className="day-weather-icon">*ICON*</div>
          <span className="day-temperature">21</span>
        </div>
        <div className="day">
          <span className="weekday">TODAY</span>
          <div className="day-weather-icon">*ICON*</div>
          <span className="day-temperature">21</span>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
