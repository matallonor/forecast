import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { WeatherRepository } from 'src/app/shared/repositories/weather.repository';

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
        WeatherService,
        WeatherRepository
      ]
    };
  }
}
