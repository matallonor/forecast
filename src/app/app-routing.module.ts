import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './shared/containers/full-layout';
import { P404Component } from './shared/error-pages';


const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full', },
  {
    path: '',
    component: FullLayoutComponent,
    data: { title: '' },
    children: [
      {
        path: 'weather',
        loadChildren: './modules/weather/weather.module#WeatherModule',
      },
    ]
  },
  { path: '**', component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
