import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { SharedModule } from '../shared/shared.module';
import { ClarityModule } from '@clr/angular';
import { CatalogBrowseComponent } from './catalog-browse/catalog-browse.component';
import { CatalogLaunchComponent } from './catalog-launch/catalog-launch.component';
import { CatalogRequestStatusComponent } from './catalog-request-status/catalog-request-status.component';


@NgModule({
  declarations: [CatalogComponent, CatalogBrowseComponent, CatalogLaunchComponent, CatalogRequestStatusComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClarityModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
