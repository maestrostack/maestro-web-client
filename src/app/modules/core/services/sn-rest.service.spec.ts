import { TestBed } from '@angular/core/testing';

import { SnRestService } from './sn-rest.service';

describe('SnRestService', () => {
  let service: SnRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
