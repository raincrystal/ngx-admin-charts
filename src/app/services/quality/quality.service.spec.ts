import { TestBed } from '@angular/core/testing';

import { QualityService } from './quality.service';

describe('ApiService', () => {
  let service: QualityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
