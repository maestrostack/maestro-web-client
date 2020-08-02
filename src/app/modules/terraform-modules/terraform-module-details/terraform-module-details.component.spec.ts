import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerraformModuleDetailsComponent } from './terraform-module-details.component';

describe('TerraformModuleDetailsComponent', () => {
  let component: TerraformModuleDetailsComponent;
  let fixture: ComponentFixture<TerraformModuleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerraformModuleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerraformModuleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
