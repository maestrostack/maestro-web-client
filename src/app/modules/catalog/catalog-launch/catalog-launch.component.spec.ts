import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogLaunchComponent } from './catalog-launch.component';

describe('CatalogLaunchComponent', () => {
  let component: CatalogLaunchComponent;
  let fixture: ComponentFixture<CatalogLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
