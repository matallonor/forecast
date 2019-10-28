
import { WeatherInfo } from './weather-info';

export class Weather {
  title: string;
  main: WeatherInfo;
  icon: string;
  dt: number;
  name: string;

  fromJSON(json) {
    if ( json === undefined || json === null || Object.keys(json).length === 0 ) {
      return null;
    }
    this.title = json.weather[0].main;
    this.icon = json.weather[0].icon;
    this.main = json.main;
    this.dt = json.dt;
    this.name = json.name;
    return this;
  }
}
