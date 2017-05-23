import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShiftComponent } from './show-shift.component';

describe('ShowShiftComponent', () => {
  let component: ShowShiftComponent;
  let fixture: ComponentFixture<ShowShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
