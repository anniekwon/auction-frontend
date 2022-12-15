import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidBuyerComponent } from './bid-buyer.component';

describe('BidBuyerComponent', () => {
  let component: BidBuyerComponent;
  let fixture: ComponentFixture<BidBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidBuyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
