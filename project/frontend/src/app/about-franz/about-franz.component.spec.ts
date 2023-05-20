import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFranzComponent } from './about-franz.component';

describe('AboutFranzComponent', () => {
  let component: AboutFranzComponent;
  let fixture: ComponentFixture<AboutFranzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutFranzComponent]
    });
    fixture = TestBed.createComponent(AboutFranzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
