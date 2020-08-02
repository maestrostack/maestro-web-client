import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScriptsRoutingModule } from './scripts-routing.module';
import { ScriptsComponent } from './scripts.component';
import { PwshComponent } from './pwsh/pwsh.component';
import { SharedModule } from '../shared/shared.module';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [ScriptsComponent, PwshComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClarityModule,
    ScriptsRoutingModule
  ]
})
export class ScriptsModule { }
