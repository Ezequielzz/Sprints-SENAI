import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassarosComponent } from './passaros.component';

describe('PassarosComponent', () => {
  let component: PassarosComponent;
  let fixture: ComponentFixture<PassarosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassarosComponent]
    });
    fixture = TestBed.createComponent(PassarosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
