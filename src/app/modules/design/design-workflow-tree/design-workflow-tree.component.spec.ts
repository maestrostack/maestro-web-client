import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignWorkflowTreeComponent } from './design-workflow-tree.component';

describe('DesignWorkflowTreeComponent', () => {
  let component: DesignWorkflowTreeComponent;
  let fixture: ComponentFixture<DesignWorkflowTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignWorkflowTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignWorkflowTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
