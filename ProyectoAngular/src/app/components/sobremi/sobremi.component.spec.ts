import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremiComponent } from './sobremi.component';

describe('SobremiComponent', () => {
  let component: SobremiComponent;
  let fixture: ComponentFixture<SobremiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobremiComponent]
    });
    fixture = TestBed.createComponent(SobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
