import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastShiftComponent } from './last-shift.component';

describe('LastShiftComponent', () => {
  let component: LastShiftComponent;
  let fixture: ComponentFixture<LastShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
