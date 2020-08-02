import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignBlockTypesComponent } from './design-block-types.component';

describe('DesignBlockTypesComponent', () => {
  let component: DesignBlockTypesComponent;
  let fixture: ComponentFixture<DesignBlockTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignBlockTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignBlockTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
