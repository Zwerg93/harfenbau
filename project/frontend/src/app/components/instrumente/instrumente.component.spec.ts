import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumenteComponent } from './instrumente.component';

describe('InstrumenteComponent', () => {
  let component: InstrumenteComponent;
  let fixture: ComponentFixture<InstrumenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstrumenteComponent]
    });
    fixture = TestBed.createComponent(InstrumenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
