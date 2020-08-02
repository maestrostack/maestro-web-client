import { TestBed } from '@angular/core/testing';

import { SnowDataService } from './snow-data.service';

describe('SnowDataService', () => {
  let service: SnowDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnowDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
