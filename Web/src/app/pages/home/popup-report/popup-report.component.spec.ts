import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupReportComponent } from './popup-report.component';

describe('PopupReportComponent', () => {
  let component: PopupReportComponent;
  let fixture: ComponentFixture<PopupReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
