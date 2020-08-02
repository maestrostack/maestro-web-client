import { TestBed } from '@angular/core/testing';

import { GuacClientService } from './guac-client.service';

describe('GuacClientService', () => {
  let service: GuacClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuacClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
