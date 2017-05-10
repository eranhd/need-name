import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSpotComponent } from './mobile-spot.component';

describe('MobileSpotComponent', () => {
  let component: MobileSpotComponent;
  let fixture: ComponentFixture<MobileSpotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSpotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
