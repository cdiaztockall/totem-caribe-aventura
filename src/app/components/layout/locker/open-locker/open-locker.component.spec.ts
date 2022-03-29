import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenLockerComponent } from './open-locker.component';

describe('OpenLockerComponent', () => {
  let component: OpenLockerComponent;
  let fixture: ComponentFixture<OpenLockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenLockerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenLockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
