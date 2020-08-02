import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogBrowseComponent } from './catalog-browse.component';

describe('CatalogBrowseComponent', () => {
  let component: CatalogBrowseComponent;
  let fixture: ComponentFixture<CatalogBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
