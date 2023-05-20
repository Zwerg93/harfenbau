import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarfenlehrerComponent } from './harfenlehrer.component';

describe('HarfenlehrerComponent', () => {
  let component: HarfenlehrerComponent;
  let fixture: ComponentFixture<HarfenlehrerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HarfenlehrerComponent]
    });
    fixture = TestBed.createComponent(HarfenlehrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
