import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedRecordRelatedTableComponent } from './shared-record-related-table.component';

describe('SharedRecordRelatedTableComponent', () => {
  let component: SharedRecordRelatedTableComponent;
  let fixture: ComponentFixture<SharedRecordRelatedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedRecordRelatedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedRecordRelatedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
