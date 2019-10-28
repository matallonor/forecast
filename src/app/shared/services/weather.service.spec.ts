
import { WeatherService } from './weather.service';
import { Weather } from '../models/weather/weather';

describe('WeatherService', () => {

  let service: WeatherService;

  beforeEach(() => {
    service = new WeatherService();
  });

  it('should return the current weather for the given city', (done: DoneFn) => {

    service.getCityWeather('london').subscribe({
      next: (weather: Weather) => {
        expect(weather).toBeTruthy();
        done();
      }
    });
  });

});


