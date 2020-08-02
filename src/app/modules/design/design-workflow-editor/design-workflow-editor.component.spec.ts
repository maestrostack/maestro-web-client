import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignWorkflowEditorComponent } from './design-workflow-editor.component';

describe('DesignWorkflowEditorComponent', () => {
  let component: DesignWorkflowEditorComponent;
  let fixture: ComponentFixture<DesignWorkflowEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignWorkflowEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignWorkflowEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
