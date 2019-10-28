import { Component, HostListener, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { Weather } from 'src/app/shared/models/weather/weather';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {

  private iconUrl: string;
  private city: string;
  private weather: Weather;
  private breakpoint: number;

  constructor(private weatherService: WeatherService) {
    this.city = 'Berlin';
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth >= 800) ? 1 : 6;
    this.search();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.breakpoint = (event.target.innerWidth >= 800) ? 1 : 6;
  }

  search() {
    this.weatherService.getCityWeather(this.city).subscribe(
      weather => {
        this.weather = weather;
      }
    );
  }
}
