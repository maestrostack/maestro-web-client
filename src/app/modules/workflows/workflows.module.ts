import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowsRoutingModule } from './workflows-routing.module';
import { WorkflowsComponent } from './workflows.component';
import { SharedModule } from '../shared/shared.module';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [WorkflowsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClarityModule,
    WorkflowsRoutingModule
  ]
})
export class WorkflowsModule { }
