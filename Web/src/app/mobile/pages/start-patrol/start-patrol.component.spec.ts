import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPatrolComponent } from './start-patrol.component';

describe('StartPatrolComponent', () => {
  let component: StartPatrolComponent;
  let fixture: ComponentFixture<StartPatrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPatrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPatrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
