import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogRequestStatusComponent } from './catalog-request-status.component';

describe('CatalogRequestStatusComponent', () => {
  let component: CatalogRequestStatusComponent;
  let fixture: ComponentFixture<CatalogRequestStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogRequestStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogRequestStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
