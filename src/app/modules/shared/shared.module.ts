import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from '../_alert';
import { ClarityModule } from '@clr/angular';
import { RecordsListViewComponent } from './records-list-view/records-list-view.component';
import { SharedRecordDetailsComponent } from './shared-record-details/shared-record-details.component';
import { SharedRecordCreateComponent } from './shared-record-create/shared-record-create.component';
import { PageLoadingComponent } from './page-loading/page-loading.component';
import { SharedRecordEditComponent } from './shared-record-edit/shared-record-edit.component';
import { SharedRecordRelatedTableComponent } from './shared-record-related-table/shared-record-related-table.component';




@NgModule({
  declarations: [
    LayoutComponent,
    RecordsListViewComponent,
    SharedRecordDetailsComponent,
    SharedRecordCreateComponent,
    PageLoadingComponent,
    SharedRecordEditComponent,
    SharedRecordRelatedTableComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    CommonModule,
    AlertModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    RecordsListViewComponent,
    SharedRecordDetailsComponent,
    SharedRecordCreateComponent,
    SharedRecordEditComponent,
    PageLoadingComponent
  ]
})
export class SharedModule { }
