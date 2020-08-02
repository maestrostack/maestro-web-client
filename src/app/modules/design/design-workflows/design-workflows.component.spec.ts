import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignWorkflowsComponent } from './design-workflows.component';

describe('DesignWorkflowsComponent', () => {
  let component: DesignWorkflowsComponent;
  let fixture: ComponentFixture<DesignWorkflowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignWorkflowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignWorkflowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
