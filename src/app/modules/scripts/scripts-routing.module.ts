import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScriptsComponent } from './scripts.component';
import { PwshComponent } from './pwsh/pwsh.component';

const routes: Routes = [
  {
    path: '',
    component: ScriptsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pwsh'
      },
      {
        path: 'pwsh',
        component: PwshComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScriptsRoutingModule { }
