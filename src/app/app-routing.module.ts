import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './shared/containers/full-layout';
import { P404Component } from './shared/error-pages';


const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    data: { title: '' }
  },
  { path: '**', component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
