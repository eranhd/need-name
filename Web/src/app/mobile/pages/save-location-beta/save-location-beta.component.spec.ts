import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveLocationBetaComponent } from './save-location-beta.component';

describe('SaveLocationBetaComponent', () => {
  let component: SaveLocationBetaComponent;
  let fixture: ComponentFixture<SaveLocationBetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveLocationBetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveLocationBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
