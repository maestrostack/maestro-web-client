import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessManagementAdminComponent } from './access-management-admin.component';

describe('AccessManagementAdminComponent', () => {
  let component: AccessManagementAdminComponent;
  let fixture: ComponentFixture<AccessManagementAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessManagementAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessManagementAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
