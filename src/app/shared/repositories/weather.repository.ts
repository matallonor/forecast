import { Observable, of } from 'rxjs';

export class WeatherRepository {
  public getCityWeather(city: string): Observable<any> {
    const object: any = {};
    return of(object);
  }
}
