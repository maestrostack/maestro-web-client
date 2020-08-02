import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { RequestsPageComponent } from './requests-page/requests-page.component';
import { ApprovalsPageComponent } from './approvals-page/approvals-page.component';
import { SharedModule } from '../shared/shared.module';
import { ClarityModule } from '@clr/angular';
import { RequestDetailsPageComponent } from './request-details-page/request-details-page.component';
import { MyRequestsPageComponent } from './my-requests-page/my-requests-page.component';
import { TeamRequestsPageComponent } from './team-requests-page/team-requests-page.component';

import { AngularSplitModule } from 'angular-split';
import { RequestDetailsWorkflowComponent } from './request-details-workflow/request-details-workflow.component';
import { DesignModule } from '../design/design.module';
import { DesignWorkflowTreeComponent } from '../design/design-workflow-tree/design-workflow-tree.component';


@NgModule({
  declarations: [PagesComponent, HomePageComponent, CatalogPageComponent, RequestsPageComponent, ApprovalsPageComponent, RequestDetailsPageComponent, MyRequestsPageComponent, TeamRequestsPageComponent, RequestDetailsWorkflowComponent],
  imports: [
    CommonModule,
    AngularSplitModule,
    SharedModule,
    ClarityModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
