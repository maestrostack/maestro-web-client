import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowNodeDetailsComponent } from './workflow-node-details.component';

describe('WorkflowNodeDetailsComponent', () => {
  let component: WorkflowNodeDetailsComponent;
  let fixture: ComponentFixture<WorkflowNodeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowNodeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowNodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
