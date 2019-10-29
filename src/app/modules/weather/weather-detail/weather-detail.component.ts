import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { Weather } from 'src/app/shared/models/weather/weather';
import { LoaderService } from 'src/app/shared/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit, OnDestroy {

  private city: string;
  private weather: Weather;
  private subscription: Subscription;

  constructor(
    private weatherService: WeatherService,
    private loader: LoaderService
  ) {
    this.city = 'Berlin';
  }

  ngOnInit() {
    this.search();
  }

  search() {
    this.loader.show('Loading');
    this.subscription = this.weatherService.getCityWeather(this.city).subscribe(
      weather => {
        this.weather = weather;
        this.loader.hide();
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
