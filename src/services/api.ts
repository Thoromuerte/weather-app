export interface Weather {
  current_condition: [Condition];
  nearest_area: [Area];
  weather: Array<DailyWeather>;
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

interface DailyWeather {
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

interface HourlyCondition {
  tempC: string;
  tempF: string;
  weatherCode: string;
  weatherDesc: [{ value: string }];
}
