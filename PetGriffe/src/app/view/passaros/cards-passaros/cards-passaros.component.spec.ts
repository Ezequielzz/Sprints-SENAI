import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPassarosComponent } from './cards-passaros.component';

describe('CardsPassarosComponent', () => {
  let component: CardsPassarosComponent;
  let fixture: ComponentFixture<CardsPassarosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsPassarosComponent]
    });
    fixture = TestBed.createComponent(CardsPassarosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
