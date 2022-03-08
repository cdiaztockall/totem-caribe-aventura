import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLokerComponent } from './login-loker.component';

describe('LoginLokerComponent', () => {
  let component: LoginLokerComponent;
  let fixture: ComponentFixture<LoginLokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginLokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
