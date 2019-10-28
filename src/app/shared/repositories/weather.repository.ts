import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherRepository {

  weatherApiUrl = `${environment.apiUrl}`;
  appId = `${environment.appId}`;

  constructor(private http: HttpClient) {}

  public getCityWeather(city: string): Observable<any> {
    const url = `${this.weatherApiUrl}?q=${city}&APPID=${this.appId}`;
    return this.http.get<any>(url);
  }
}
