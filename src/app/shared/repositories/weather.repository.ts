import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class WeatherRepository {

  weatherApiUrl = `${environment.apiUrl}`;
  appId = `${environment.appId}`;

  constructor(private http: HttpClient) {}

  get headers(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  public getCityWeather(city: string): Observable<any> {
    const options = { headers: this.headers };
    const url = `${this.weatherApiUrl}?q=${city}&APPID=${this.appId}`;
    return this.http.get<any>(url, options);
  }
}
