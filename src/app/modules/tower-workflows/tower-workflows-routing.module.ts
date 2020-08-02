import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TowerWorkflowsComponent } from './tower-workflows.component';

const routes: Routes = [{ path: '', component: TowerWorkflowsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TowerWorkflowsRoutingModule { }
