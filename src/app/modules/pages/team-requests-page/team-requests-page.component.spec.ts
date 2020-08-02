import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRequestsPageComponent } from './team-requests-page.component';

describe('TeamRequestsPageComponent', () => {
  let component: TeamRequestsPageComponent;
  let fixture: ComponentFixture<TeamRequestsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamRequestsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
