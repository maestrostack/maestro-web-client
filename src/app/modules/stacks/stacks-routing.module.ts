import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StacksComponent } from './stacks.component';
import { StacksBrowseComponent } from './stacks-browse/stacks-browse.component';
import { StackDetailsComponent } from './stack-details/stack-details.component';

const routes: Routes = [
  {
    path: '',
    component: StacksComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'browse'
      },
      {
        path: 'browse',
        component: StacksBrowseComponent
      },
      {
        path: 'details/:stack',
        component: StackDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StacksRoutingModule { }
