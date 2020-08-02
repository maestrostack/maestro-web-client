import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedRecordDetailsComponent } from './shared-record-details.component';

describe('SharedRecordDetailsComponent', () => {
  let component: SharedRecordDetailsComponent;
  let fixture: ComponentFixture<SharedRecordDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedRecordDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedRecordDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
