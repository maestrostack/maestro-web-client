import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { ClarityModule } from '@clr/angular';
import { AccessManagementAdminComponent } from './access-management-admin/access-management-admin.component';
import { AdminRecordListComponent } from './admin-record-list/admin-record-list.component';


@NgModule({
  declarations: [AdminComponent, AccessManagementAdminComponent, AdminRecordListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClarityModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
