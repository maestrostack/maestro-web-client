import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsComponent } from './requests.component';
import { RequestsHomeComponent } from './requests-home/requests-home.component';


@NgModule({
  declarations: [RequestsComponent, RequestsHomeComponent],
  imports: [
    CommonModule,
    RequestsRoutingModule
  ]
})
export class RequestsModule { }
