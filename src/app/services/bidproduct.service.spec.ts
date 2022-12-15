import { TestBed } from '@angular/core/testing';

import { BidproductService } from './bidproduct.service';

describe('BidproductService', () => {
  let service: BidproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BidproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
