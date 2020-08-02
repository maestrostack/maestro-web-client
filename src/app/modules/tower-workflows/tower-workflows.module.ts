import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TowerWorkflowsRoutingModule } from './tower-workflows-routing.module';
import { TowerWorkflowsComponent } from './tower-workflows.component';
import { SharedModule } from '../shared/shared.module';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [TowerWorkflowsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClarityModule,
    TowerWorkflowsRoutingModule
  ]
})
export class TowerWorkflowsModule { }
