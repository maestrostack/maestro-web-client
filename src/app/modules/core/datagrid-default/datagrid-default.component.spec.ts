import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridDefaultComponent } from './datagrid-default.component';

describe('DatagridDefaultComponent', () => {
  let component: DatagridDefaultComponent;
  let fixture: ComponentFixture<DatagridDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagridDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
