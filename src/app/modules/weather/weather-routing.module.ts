import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Weather'
    },
    children: [
      {
        path: '',
        component: WeatherDetailComponent,
        data: { title: '' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
