/* eslint-disable max-len */
import { HourlyCondition, DailyWeather } from '../services/weather.service';

const HOURLY_WEATHER_INTERVAL = 1000 * 60 * 60 * 3;

const formatHourlyWeather = (hourlyWeather: HourlyCondition[], date: string | Date = new Date()): HourlyCondition[] => {
  const currentTime = new Date(date).setHours(0, 0, 0);

  const weather = hourlyWeather.map((item, index) => {
    return { ...item, time: new Date(+currentTime + index * HOURLY_WEATHER_INTERVAL) };
  });

  return weather;
};

const formatDailyWeather = (dailyWeather: DailyWeather[]): DailyWeather[] => {
  return dailyWeather.map((weather) => ({
    ...weather,
    hourly: formatHourlyWeather(weather.hourly, weather.date),
  }));
};

const getFlattenedHourlyWeatherList = (dailyWeather: DailyWeather[]): HourlyCondition[] => {
  const hourlyWeather = dailyWeather.map((item) => item.hourly).flat();

  return hourlyWeather;
};

export const filterHourlyWeatherBasedOnCurrentTime = (dailyWeather: DailyWeather[]): HourlyCondition[] => {
  const formattedDailyWeather = formatDailyWeather(dailyWeather);
  const hourlyWeather = getFlattenedHourlyWeatherList(formattedDailyWeather);
  const filteredArray = hourlyWeather.filter((item) => +item.time + HOURLY_WEATHER_INTERVAL >= +new Date());

  return filteredArray.slice(0, 8);
};
