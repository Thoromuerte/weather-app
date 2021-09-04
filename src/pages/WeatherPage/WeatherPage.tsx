import * as React from 'react';
import { useParams } from 'react-router-dom';

import { DateTodo } from '../../components/DateTodo/DateTodo';
import { filterHourlyWeatherBasedOnCurrentTime } from '../../utils/filteredDate';
import { fetchWeather, ChangedDataForWeather } from '../../services/weather.service';
import { LocationWeather } from '../../components/LocationWeather/LocationWeather';
import { HourlyWeather } from '../../components/HourlyWeather/HourlyWeather';

import { ICON_CODES } from '../../constants/weatherCodes';

import styles from './weatherPage.module.css';

export const WeatherPage = (): JSX.Element => {
  const params = useParams<{ city: string }>();

  const [weather, setWeather] = React.useState<ChangedDataForWeather>();

  React.useEffect(() => {
    fetchWeather(params.city)
      .then((data) => setWeather(data))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  }, [params.city]);

  const hourlyWeather = filterHourlyWeatherBasedOnCurrentTime(weather?.weather ?? []);

  return (
    <div className={styles['weather-page']}>
      <div className={styles['weather-page-top']}>
        <DateTodo />
        <LocationWeather
          location={weather?.location}
          temperature={weather?.temperature}
          weatherDesc={weather?.weatherDesc}
          iconPath={weather?.icon ? ICON_CODES[weather?.icon] : undefined}
        />
      </div>
      <div className={styles['hourly-list']}>
        {hourlyWeather.map((item) => (
          <HourlyWeather
            key={item.time.toString()}
            hourlytime={item.time as Date}
            iconPath={ICON_CODES[item.weatherCode]}
            temperature={item.tempC}
          />
        ))}
      </div>
    </div>
  );
};
