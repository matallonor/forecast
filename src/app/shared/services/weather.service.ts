import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Weather } from 'src/app/shared/models/weather/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() {}

  getCityWeather(city: string): Observable<any> {
    const object = {};
    return of(object);
  }
}
