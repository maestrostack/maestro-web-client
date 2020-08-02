import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { RequestsPageComponent } from './requests-page/requests-page.component';
import { ApprovalsPageComponent } from './approvals-page/approvals-page.component';
import { RequestDetailsPageComponent } from './request-details-page/request-details-page.component';
import { MyRequestsPageComponent } from './my-requests-page/my-requests-page.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'catalog',
        component: CatalogPageComponent
      },
      {
        path: 'requests',
        component: RequestsPageComponent,
        children: [
          {
            path: 'details/:id',
            component: RequestDetailsPageComponent
          },
          {
            path: 'me',
            component: MyRequestsPageComponent
          }
        ]
      },
      {
        path: 'approvals',
        component: ApprovalsPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
