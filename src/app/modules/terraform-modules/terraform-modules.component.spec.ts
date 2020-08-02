import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerraformModulesComponent } from './terraform-modules.component';

describe('TerraformModulesComponent', () => {
  let component: TerraformModulesComponent;
  let fixture: ComponentFixture<TerraformModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerraformModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerraformModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
