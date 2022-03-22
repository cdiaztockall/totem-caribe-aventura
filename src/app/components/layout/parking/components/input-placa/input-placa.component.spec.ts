import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPlacaComponent } from './input-placa.component';

describe('InputPlacaComponent', () => {
  let component: InputPlacaComponent;
  let fixture: ComponentFixture<InputPlacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPlacaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
