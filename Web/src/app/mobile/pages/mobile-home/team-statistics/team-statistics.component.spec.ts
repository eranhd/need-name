import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStatisticsComponent } from './team-statistics.component';

describe('TeamStatisticsComponent', () => {
  let component: TeamStatisticsComponent;
  let fixture: ComponentFixture<TeamStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
