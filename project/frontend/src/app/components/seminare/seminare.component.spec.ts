import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminareComponent } from './seminare.component';

describe('SeminareComponent', () => {
  let component: SeminareComponent;
  let fixture: ComponentFixture<SeminareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeminareComponent]
    });
    fixture = TestBed.createComponent(SeminareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
