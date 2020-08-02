import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignCustomIconsComponent } from './design-custom-icons.component';

describe('DesignCustomIconsComponent', () => {
  let component: DesignCustomIconsComponent;
  let fixture: ComponentFixture<DesignCustomIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignCustomIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignCustomIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
