import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Weather } from 'src/app/shared/models/weather/weather';
import { WeatherRepository } from 'src/app/shared/repositories/weather.repository';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private repository: WeatherRepository) {}

  getCityWeather(city: string): Observable<Weather> {
    return this.repository.getCityWeather(city);
  }
}
