import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndPatrolComponent } from './end-patrol.component';

describe('EndPatrolComponent', () => {
  let component: EndPatrolComponent;
  let fixture: ComponentFixture<EndPatrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndPatrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndPatrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
