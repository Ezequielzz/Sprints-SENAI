import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosPetComponent } from './servicos-pet.component';

describe('ServicosPetComponent', () => {
  let component: ServicosPetComponent;
  let fixture: ComponentFixture<ServicosPetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicosPetComponent]
    });
    fixture = TestBed.createComponent(ServicosPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
