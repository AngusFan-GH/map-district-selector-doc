import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MapDistrictSelectorService } from 'projects/map-district-selector/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'map-district-selector-doc';

  constructor(
    private helper: MapDistrictSelectorService,
    public viewContainerRef: ViewContainerRef
  ) { }

  open(): void {
    this.helper.open(this.viewContainerRef);
  }
}
