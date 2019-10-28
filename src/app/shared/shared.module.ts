import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { LoaderService, WeatherService } from 'src/app/shared/services';
import { WeatherRepository } from './repositories/weather.repository';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule.forChild({
      isolate: true
    }),
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        LoaderService,
        WeatherService,
        WeatherRepository
      ]
    };
  }
}
