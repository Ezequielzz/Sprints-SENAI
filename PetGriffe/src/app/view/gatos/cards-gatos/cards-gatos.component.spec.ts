import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsGatosComponent } from './cards-gatos.component';

describe('CardsGatosComponent', () => {
  let component: CardsGatosComponent;
  let fixture: ComponentFixture<CardsGatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsGatosComponent]
    });
    fixture = TestBed.createComponent(CardsGatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
