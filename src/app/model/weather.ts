export interface Weather {
  current_weather: CurrentWeather;
  hourly_units: HourlyUnits;
  hourly: Hourly;
  daily: DailyWeather;
}

export interface CurrentWeather {
  temperature: number;
  time: string;
}

export interface HourlyUnits {
  time: string;
  temperature_2m: string;
  relativehumidity_2m: string;
  windspeed_10m: string;
}

export interface Hourly {
  time: string[];
  windspeed_10m: string[];
}

export interface DailyWeather {
  temperature_2m_max: number;
  temperature_2m_min: number;
  time: string[];
}
