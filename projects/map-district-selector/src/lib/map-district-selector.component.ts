import { Component, OnInit, ViewContainerRef, Input } from '@angular/core';
import { MapDistrictSelectorService } from './map-district-selector.service';

@Component({
  selector: 'mds-map-district-selector',
  templateUrl: './map-district-selector.component.html',
  styleUrls: ['./map-district-selector.component.scss']
})
export class MapDistrictSelectorComponent implements OnInit {
  @Input() label = '';
  constructor(
    private helper: MapDistrictSelectorService,
    public viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
  }

  open(): void {
    this.helper.open(this.viewContainerRef);
  }

  close(): void {
    this.helper.close();
  }

}
