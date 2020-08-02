import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StacksRoutingModule } from './stacks-routing.module';
import { StacksComponent } from './stacks.component';
import { SharedModule } from '../shared/shared.module';
import { ClarityModule } from '@clr/angular';
import { StacksBrowseComponent } from './stacks-browse/stacks-browse.component';
import { StackDetailsComponent } from './stack-details/stack-details.component';


@NgModule({
  declarations: [StacksComponent, StacksBrowseComponent, StackDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClarityModule,
    StacksRoutingModule
  ]
})
export class StacksModule { }
