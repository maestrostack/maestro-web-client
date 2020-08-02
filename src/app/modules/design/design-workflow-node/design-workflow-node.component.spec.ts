import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignWorkflowNodeComponent } from './design-workflow-node.component';

describe('DesignWorkflowNodeComponent', () => {
  let component: DesignWorkflowNodeComponent;
  let fixture: ComponentFixture<DesignWorkflowNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignWorkflowNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignWorkflowNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
