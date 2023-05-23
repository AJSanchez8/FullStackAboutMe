import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsComponent } from './edits.component';

describe('EditsComponent', () => {
  let component: EditsComponent;
  let fixture: ComponentFixture<EditsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditsComponent]
    });
    fixture = TestBed.createComponent(EditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
