import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutParkingComponent } from './checkout-parking.component';

describe('CheckoutParkingComponent', () => {
  let component: CheckoutParkingComponent;
  let fixture: ComponentFixture<CheckoutParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutParkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
