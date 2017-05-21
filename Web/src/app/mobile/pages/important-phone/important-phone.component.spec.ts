import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantPhoneComponent } from './important-phone.component';

describe('ImportantPhoneComponent', () => {
  let component: ImportantPhoneComponent;
  let fixture: ComponentFixture<ImportantPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
