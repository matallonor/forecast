import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FullLayoutComponent } from './shared/containers';
const APP_CONTAINERS = [FullLayoutComponent];

const APP_COMPONENTS = [
];

// Import directives
const APP_DIRECTIVES = [];

// import pages
import { P404Component } from './shared/error-pages';
const APP_PAGES = [P404Component];

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    SharedModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    ...APP_PAGES,
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
