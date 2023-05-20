import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusstellungenComponent } from './ausstellungen.component';

describe('AusstellungenComponent', () => {
  let component: AusstellungenComponent;
  let fixture: ComponentFixture<AusstellungenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AusstellungenComponent]
    });
    fixture = TestBed.createComponent(AusstellungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
