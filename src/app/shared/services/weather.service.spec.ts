
import { WeatherService } from './weather.service';
import { Weather } from '../models/weather/weather';
import { WeatherRepository } from 'src/app/shared/repositories/weather.repository';
import { of } from 'rxjs';

describe('WeatherService', () => {

  let repository: WeatherRepository;
  let service: WeatherService;

  beforeEach(() => {
    repository = jasmine.createSpyObj('WeatherRepository', ['getCityWeather']);
    service = new WeatherService(repository);
  });

  it('should return the current weather for the given city', (done: DoneFn) => {

    (repository as any).getCityWeather.and.returnValue(of({}));

    service.getCityWeather('london').subscribe({
      next: (weather: Weather) => {
        expect(weather).toBeTruthy();
        done();
      }
    });
  });

});


