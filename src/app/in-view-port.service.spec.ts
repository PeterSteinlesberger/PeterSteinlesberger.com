import { TestBed } from '@angular/core/testing';

import { InViewPortService } from './in-view-port.service';

describe('InViewPortService', () => {
  let service: InViewPortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InViewPortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
