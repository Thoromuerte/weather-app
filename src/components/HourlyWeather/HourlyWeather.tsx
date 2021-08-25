import { getTime } from '../../utils/date';

import './hourlyWeather.css';

export interface HourlyWeatherProps {
  hourlytime: Date;
  iconPath: string;
  temperature: string;
}

export const HourlyWeather = (props: HourlyWeatherProps): JSX.Element => {
  const { hourlytime, iconPath, temperature } = props;

  return (
    <div className="hours">
      <span className="hours-time">{getTime(hourlytime)}</span>
      <img src={iconPath} alt="weather" className="hourly-weather-icon" />
      <span className="hourly-temperature">{temperature}</span>
    </div>
  );
};
