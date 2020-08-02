import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecordListComponent } from './admin-record-list.component';

describe('AdminRecordListComponent', () => {
  let component: AdminRecordListComponent;
  let fixture: ComponentFixture<AdminRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
