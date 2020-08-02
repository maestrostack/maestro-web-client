import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedRecordEditComponent } from './shared-record-edit.component';

describe('SharedRecordEditComponent', () => {
  let component: SharedRecordEditComponent;
  let fixture: ComponentFixture<SharedRecordEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedRecordEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedRecordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
