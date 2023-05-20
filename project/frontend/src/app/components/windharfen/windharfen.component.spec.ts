import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindharfenComponent } from './windharfen.component';

describe('WindharfenComponent', () => {
  let component: WindharfenComponent;
  let fixture: ComponentFixture<WindharfenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WindharfenComponent]
    });
    fixture = TestBed.createComponent(WindharfenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
