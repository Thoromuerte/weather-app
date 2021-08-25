import './locationWeather.css';

export interface LocationWeatherProps {
  region?: string;
  country?: string
  temperature?: string;
  weatherDesc?: string;
  iconPath?: string;
}

export const LocationWeather = (props: LocationWeatherProps): JSX.Element => {
  const {
    region,
    country,
    temperature,
    weatherDesc,
    iconPath,
  } = props;

  return (
    <div className="city-weather">
      <img
        src={iconPath}
        alt="weather"
        className="weather-icon"
      />
      <span className="weather-state">{weatherDesc}</span>
      <span className="location">
        {region}, {country}
      </span>
      <span className="temperature">{temperature}°</span>
    </div>
  );
};
