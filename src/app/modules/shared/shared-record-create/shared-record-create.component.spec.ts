import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedRecordCreateComponent } from './shared-record-create.component';

describe('SharedRecordCreateComponent', () => {
  let component: SharedRecordCreateComponent;
  let fixture: ComponentFixture<SharedRecordCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedRecordCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedRecordCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
