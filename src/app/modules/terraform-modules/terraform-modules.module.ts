import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerraformModulesRoutingModule } from './terraform-modules-routing.module';
import { TerraformModulesComponent } from './terraform-modules.component';
import { SharedModule } from '../shared/shared.module';
import { ClarityModule } from '@clr/angular';
import { TerraformModuleDetailsComponent } from './terraform-module-details/terraform-module-details.component';


@NgModule({
  declarations: [TerraformModulesComponent, TerraformModuleDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClarityModule,
    TerraformModulesRoutingModule
  ]
})
export class TerraformModulesModule { }
