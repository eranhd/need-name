import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastReportComponent } from './last-report.component';

describe('LastReportComponent', () => {
  let component: LastReportComponent;
  let fixture: ComponentFixture<LastReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
