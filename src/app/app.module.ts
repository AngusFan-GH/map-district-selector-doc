import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MapDistrictSelectorModule } from 'projects/map-district-selector/src/public-api';
import { GEO_JSON_API_PATH } from 'projects/map-district-selector/src/lib/map-district-selector.token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MapDistrictSelectorModule
  ],
  providers: [
    { provide: GEO_JSON_API_PATH, useValue: 'http://localhost:8080/assets' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
