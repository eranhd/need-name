import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartShiftComponent } from './start-shift.component';

describe('StartShiftComponent', () => {
  let component: StartShiftComponent;
  let fixture: ComponentFixture<StartShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
