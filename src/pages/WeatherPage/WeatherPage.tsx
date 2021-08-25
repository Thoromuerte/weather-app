/* eslint-disable react/jsx-indent-props */
import * as React from 'react';
import { useParams } from 'react-router-dom';

import { WeatherPageTopLeft } from '../../components/WeatherPageTopLeft/WeatherPageTopLeft';
import { filterHourlyWeatherBasedOnCurrentTime } from '../../utils/filteredDate';
import { Weather } from '../../services/api';
import { LocationWeather } from '../../components/LocationWeather/LocationWeather';

import { ICON_CODES } from '../../constants/weatherCodes';

import './weatherPage.css';
import { HourlyWeather } from '../../components/HourlyWeather/HourlyWeather';

export const WeatherPage = (): JSX.Element => {
  const params = useParams<{ city: string }>();

  const [weather, setWeather] = React.useState<Weather>();

  React.useEffect(() => {
    fetch(`https://wttr.in/${params.city}?format=j1`)
      .then((response) => response.json())
      .then((json: Weather) => setWeather(json))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  }, [params.city]);

  const hourlyWeather = filterHourlyWeatherBasedOnCurrentTime(weather?.weather ?? []);

  return (
    <div className="weather-page">
      <div className="weather-page-top">
        <WeatherPageTopLeft />
        <LocationWeather
        region={weather?.nearest_area[0].region[0].value}
        country={weather?.nearest_area[0].country[0].value}
        temperature={weather?.current_condition[0].temp_C}
        weatherDesc={weather?.current_condition[0].weatherDesc[0].value}
        iconPath={ICON_CODES[weather?.current_condition[0].weatherCode ?? '113']}
        />
      </div>
      <div className="hourly-list">
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
