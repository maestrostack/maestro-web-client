import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetailsWorkflowComponent } from './request-details-workflow.component';

describe('RequestDetailsWorkflowComponent', () => {
  let component: RequestDetailsWorkflowComponent;
  let fixture: ComponentFixture<RequestDetailsWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDetailsWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDetailsWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
