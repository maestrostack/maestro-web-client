import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignWorkflowPaletteComponent } from './design-workflow-palette.component';

describe('DesignWorkflowPaletteComponent', () => {
  let component: DesignWorkflowPaletteComponent;
  let fixture: ComponentFixture<DesignWorkflowPaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignWorkflowPaletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignWorkflowPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
