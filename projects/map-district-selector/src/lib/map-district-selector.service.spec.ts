import { TestBed } from '@angular/core/testing';

import { MapDistrictSelectorService } from './map-district-selector.service';

describe('MapDistrictSelectorService', () => {
  let service: MapDistrictSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapDistrictSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
