import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';
import { CatalogBrowseComponent } from './catalog-browse/catalog-browse.component';
import { CatalogLaunchComponent } from './catalog-launch/catalog-launch.component';
import { CatalogRequestStatusComponent } from './catalog-request-status/catalog-request-status.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'browse'
      },
      {
        path: 'browse',
        component: CatalogBrowseComponent
      },
      {
        path: 'launch/:workflow',
        component: CatalogLaunchComponent
      },
      {
        path: 'status/:stack',
        component: CatalogRequestStatusComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
