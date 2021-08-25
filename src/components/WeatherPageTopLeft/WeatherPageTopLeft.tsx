import * as React from 'react';

import { getCurrentDate, getTime } from '../../utils/date';

import './weatherPageTopLeft.css';

export const WeatherPageTopLeft = (): JSX.Element => {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const checkTime = window.setInterval(() => setDate(new Date()), 10000);

    return () => clearInterval(checkTime);
  }, []);

  return (
    <div className="top-left">
      <div className="time-date">
        <span className="time">{getTime(date)}</span>
        <span className="date">
          {getCurrentDate('weekday')}, {date.getDate()} {getCurrentDate('month')} {date.getFullYear()}
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
  );
};
