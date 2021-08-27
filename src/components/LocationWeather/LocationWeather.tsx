import { Skeleton } from '../Skeleton/Skeleton';
import './locationWeather.css';

export interface LocationWeatherProps {
  location?: string;
  temperature?: string;
  weatherDesc?: string;
  iconPath?: string;
}

export const LocationWeather = (props: LocationWeatherProps): JSX.Element => {
  const {
    location,
    temperature,
    weatherDesc,
    iconPath,
  } = props;

  return (
    <div className="city-weather">
      {iconPath ? <img src={iconPath} alt="weather" className="weather-icon" /> : <Skeleton width="100px" height="100px" /> }
      <span className="weather-state">{weatherDesc ?? <Skeleton width="200px" />}
      </span>
      <span className="location">
        {location ?? <Skeleton width="200px" /> }
      </span>
      <span className="temperature"> {temperature ? (<span>{temperature}°</span>) : <Skeleton /> } </span>
    </div>
  );
};
