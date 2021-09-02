import { getTime } from '../../utils/date';

import styles from './hourlyWeather.module.css';

export interface HourlyWeatherProps {
  hourlytime: Date;
  iconPath: string;
  temperature: string;
}

export const HourlyWeather = (props: HourlyWeatherProps): JSX.Element => {
  const { hourlytime, iconPath, temperature } = props;

  return (
    <div className={styles.hours}>
      <span className={styles['hours-time']}>{getTime(hourlytime)}</span>
      <img src={iconPath} alt="weather" className={styles['hourly-weather-icon']} />
      <span className={styles['hourly-temperature']}>{temperature}</span>
    </div>
  );
};
