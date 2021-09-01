import * as React from 'react';
import { useParams } from 'react-router-dom';

import { DateTodo, Todo } from '../../components/WeatherPageTopLeft/WeatherPageTopLeft';
import { filterHourlyWeatherBasedOnCurrentTime } from '../../utils/filteredDate';
import { fetchWeather, ChangedDataForWeather } from '../../services/weather.service';
import { LocationWeather } from '../../components/LocationWeather/LocationWeather';
import { HourlyWeather } from '../../components/HourlyWeather/HourlyWeather';

import { ICON_CODES } from '../../constants/weatherCodes';

import './weatherPage.css';

const temporalTodo: Todo[] = [
  {
    time: '11:00',
    text: 'Созвон',
  },
  {
    time: '13:00',
    text: 'Обед, покормить кота',
  },
  {
    time: '14:00',
    text: 'Дейлики в Геншине',
  },
  {
    time: '14:30',
    text: 'Крутануть гачу',
  },
  {
    time: '14:35',
    text: 'Поплакать',
  },
  {
    time: '15:00',
    text: 'Таски',
  },
  {
    time: '18:00',
    text: 'Зайти в Дискорд',
  },
  {
    time: '18:30',
    text: 'Выйти из Дискорда',
  },
];

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
    <div className="weather-page">
      <div className="weather-page-top">
        <DateTodo todo={temporalTodo} />
        <LocationWeather
          location={weather?.location}
          temperature={weather?.temperature}
          weatherDesc={weather?.weatherDesc}
          iconPath={weather?.icon ? ICON_CODES[weather?.icon] : undefined}
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
