import { Skeleton } from '../Skeleton/Skeleton';

import styles from './locationWeather.module.css';

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
    <div className={styles['city-weather']}>
      <div className={styles['icon-location']}>
        {iconPath ? <img src={iconPath} alt="weather" className={styles['weather-icon']} /> : <Skeleton width="100px" height="100px" /> }
      </div>
      <span className={styles['weather-state']}>{weatherDesc ?? <Skeleton width="200px" height="55px" />}
      </span>
      <span className={styles.location}>
        {location ?? <Skeleton width="200px" /> }
      </span>
      <span className={styles.temperature}> {temperature ? (<span>{temperature}°</span>) : <Skeleton width="80px" height="55px" /> } </span>
    </div>
  );
};
