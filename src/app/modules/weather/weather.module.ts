import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { SharedModule } from '../../shared/shared.module';
import {MatFormFieldModule, MatIconModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  providers: [],
  declarations: [
    WeatherDetailComponent
  ]
})
export class WeatherModule { }
