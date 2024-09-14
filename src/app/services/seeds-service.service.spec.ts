import { TestBed } from '@angular/core/testing';

import { SeedsServiceService } from './seeds-service.service';

describe('SeedsServiceService', () => {
  let service: SeedsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeedsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
