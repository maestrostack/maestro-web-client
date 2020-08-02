import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignProvidersComponent } from './design-providers.component';

describe('DesignProvidersComponent', () => {
  let component: DesignProvidersComponent;
  let fixture: ComponentFixture<DesignProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
