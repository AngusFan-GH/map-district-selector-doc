import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDistrictSelectorComponent } from './map-district-selector.component';

describe('MapDistrictSelectorComponent', () => {
  let component: MapDistrictSelectorComponent;
  let fixture: ComponentFixture<MapDistrictSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapDistrictSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDistrictSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
