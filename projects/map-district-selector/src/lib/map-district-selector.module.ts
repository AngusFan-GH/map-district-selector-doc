import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { MapDistrictSelectorService } from './map-district-selector.service';
import { MDSPanelModule } from './components/panel/panel.module';

@NgModule({
  imports: [
    OverlayModule,
    MDSPanelModule
  ],
  providers: [
    MapDistrictSelectorService
  ]
})
export class MapDistrictSelectorModule { }
