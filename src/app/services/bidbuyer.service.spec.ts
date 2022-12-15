import { TestBed } from '@angular/core/testing';

import { BidbuyerService } from './bidbuyer.service';

describe('BidbuyerService', () => {
  let service: BidbuyerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BidbuyerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
