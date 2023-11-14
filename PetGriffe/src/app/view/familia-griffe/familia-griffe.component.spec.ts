import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliaGriffeComponent } from './familia-griffe.component';

describe('FamiliaGriffeComponent', () => {
  let component: FamiliaGriffeComponent;
  let fixture: ComponentFixture<FamiliaGriffeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamiliaGriffeComponent]
    });
    fixture = TestBed.createComponent(FamiliaGriffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
