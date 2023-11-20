import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingLeagueComponent } from './standing-league.component';

describe('StandingLeagueComponent', () => {
  let component: StandingLeagueComponent;
  let fixture: ComponentFixture<StandingLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandingLeagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
