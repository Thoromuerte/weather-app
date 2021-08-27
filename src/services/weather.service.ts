export interface Weather {
  current_condition: [Condition];
  nearest_area: [Area];
  weather: DailyWeather[];
}

interface Condition {
  FeelsLikeC: string;
  FeelsLikeF: string;
  cloudcover: string;
  humidity: string;
  lang_ru: [{ value: string }];
  localObsDateTime: string;
  observation_time: string;
  precipInches: string;
  precipMM: string;
  pressure: string;
  pressureInches: string;
  temp_C: string;
  temp_F: string;
  uvIndex: string;
  visibility: string;
  visibilityMiles: string;
  weatherCode: string;
  weatherDesc: [{ value: string }];
  winddir16Point: string;
  winddirDegree: string;
  windspeedKmph: string;
  windspeedMiles: string;
}

interface Area {
  areaName: [{ value: string }];
  country: [{ value: string }];
  latitude: string;
  longitude: string;
  population: string;
  region: [{ value: string }];
}

export interface DailyWeather {
  astronomy: string[];
  avgtempC: string;
  avgtempF: string;
  date: string;
  hourly: HourlyCondition[];
  maxtempC: string;
  maxtempF: string;
  mintempC: string;
  mintempF: string;
  sunHour: string;
  totalSnow_cm: string;
  uvIndex: string;
}

export interface HourlyCondition {
  tempC: string;
  tempF: string;
  weatherCode: string;
  weatherDesc: [{ value: string }];
  time: string | Date;
}

export interface ChangedDataForWeather {
  location?: string;
  icon: string;
  temperature: string;
  weatherDesc: string;
  weather: DailyWeather[];
}

const changeData = (data:Weather): ChangedDataForWeather => {
  const loc = `${data.nearest_area[0].region[0].value}, ${data.nearest_area[0].country[0].value}`;
  return {
    location: loc,
    icon: data.current_condition[0].weatherCode,
    temperature: data.current_condition[0].temp_C,
    weatherDesc: data.current_condition[0].weatherDesc[0].value,
    weather: [],
  };
};

export const fetchWeather = async (city: string): Promise<ChangedDataForWeather> => {
  const response = await fetch(`https://wttr.in/${city}?format=j1`);
  const commits = await response.json() as Weather;
  const data = changeData(commits);
  return data;
};
