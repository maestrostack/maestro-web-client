import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feathers } from './services/feathers.service';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { DatagridDefaultComponent } from './datagrid-default/datagrid-default.component';



@NgModule({
  declarations: [DatagridDefaultComponent],
  imports: [
    CommonModule
  ],
  providers: [
    Feathers,
    DataService,
    AuthService,
    AuthGuard
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
