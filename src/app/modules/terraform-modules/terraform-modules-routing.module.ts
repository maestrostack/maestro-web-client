import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerraformModulesComponent } from './terraform-modules.component';

const routes: Routes = [{ path: '', component: TerraformModulesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerraformModulesRoutingModule { }
