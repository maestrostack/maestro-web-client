import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AccessManagementAdminComponent } from './access-management-admin/access-management-admin.component';
import { AdminRecordListComponent } from './admin-record-list/admin-record-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'access-management/users'
      },
      {
        path: 'access-management',
        component: AccessManagementAdminComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'users'
          },
          {
            path: ':table',
            component: AdminRecordListComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
