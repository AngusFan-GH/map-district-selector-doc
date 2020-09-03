import { NgModule } from '@angular/core';
import { MapDistrictSelectorComponent } from './map-district-selector.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MapDistrictSelectorService } from './map-district-selector.service';
import { MDSPanelModule } from './components/panel/panel.module';

@NgModule({
  declarations: [
    MapDistrictSelectorComponent,
  ],
  imports: [
    OverlayModule,
    MDSPanelModule
  ],
  exports: [
    MapDistrictSelectorComponent
  ],
  providers: [
    MapDistrictSelectorService
  ]
})
export class MapDistrictSelectorModule { }
