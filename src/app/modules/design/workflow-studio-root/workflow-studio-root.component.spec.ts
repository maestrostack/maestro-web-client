import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowStudioRootComponent } from './workflow-studio-root.component';

describe('WorkflowStudioRootComponent', () => {
  let component: WorkflowStudioRootComponent;
  let fixture: ComponentFixture<WorkflowStudioRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowStudioRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowStudioRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
