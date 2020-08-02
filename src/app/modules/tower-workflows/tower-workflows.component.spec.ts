import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerWorkflowsComponent } from './tower-workflows.component';

describe('TowerWorkflowsComponent', () => {
  let component: TowerWorkflowsComponent;
  let fixture: ComponentFixture<TowerWorkflowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowerWorkflowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowerWorkflowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
