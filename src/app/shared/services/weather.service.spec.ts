
import { WeatherService } from './weather.service';
import { Weather } from '../models/weather/weather';
import { WeatherRepository } from 'src/app/shared/repositories/weather.repository';
import { of } from 'rxjs';

describe('WeatherService', () => {

  let repository: WeatherRepository;
  let service: WeatherService;
  let mockWeather;

  beforeAll( () => {
    mockWeather = {
      weather : { main: 'Rain' },
      main : {
        temp : 280.32,
        pressure : 1012,
        humidity : 81,
        tempMin : 279.15,
        tempMax : 281.15,
      },
      dt : 1485789600,
      name : 'Berlin'
    };
  });

  beforeEach(() => {
    repository = jasmine.createSpyObj('WeatherRepository', ['getCityWeather']);
    service = new WeatherService(repository);
  });

  it('should return the current weather for the given city', (done: DoneFn) => {

    (repository as any).getCityWeather.and.returnValue(of(mockWeather));

    service.getCityWeather('london').subscribe({
      next: (weather: Weather) => {
        expect(weather).toBeTruthy();
        expect(weather.title).toBe(mockWeather.weather.main);
        expect(weather.main).toBe(mockWeather.main);
        expect(weather.dt).toBe(mockWeather.dt);
        expect(weather.name).toBe(mockWeather.name);
        done();
      }
    });
  });

});


