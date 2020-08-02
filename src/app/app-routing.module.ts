import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './modules/shared/layout/layout.component';
import { AuthGuard } from './modules/core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [
      AuthGuard
    ],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pages/home'
      },
      { 
        path: 'home',
        canActivate: [
          AuthGuard
        ],
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) 
      },
      { 
        path: 'pages',
        canActivate: [
          AuthGuard
        ],
        loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule) 
      },
      { 
        path: 'stacks',
        canActivate: [
          AuthGuard
        ],
        loadChildren: () => import('./modules/stacks/stacks.module').then(m => m.StacksModule) 
      }, 
      { 
        path: 'dashboard', 
        canActivate: [
          AuthGuard
        ],
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) 
      },
      { path: 'requests', loadChildren: () => import('./modules/requests/requests.module').then(m => m.RequestsModule) },
      { 
        path: 'terraform-modules', 
        canActivate: [
          AuthGuard
        ],
        loadChildren: () => import('./modules/terraform-modules/terraform-modules.module').then(m => m.TerraformModulesModule) 
      },
      { 
        path: 'design', 
        canActivate: [
          AuthGuard
        ],
        loadChildren: () => import('./modules/design/design.module').then(m => m.DesignModule) 
      },
      { 
        path: 'scripts',
        canActivate: [
          AuthGuard
        ],
        loadChildren: () => import('./modules/scripts/scripts.module').then(m => m.ScriptsModule) 
      },
      { path: 'catalog', loadChildren: () => import('./modules/catalog/catalog.module').then(m => m.CatalogModule) },
      { path: 'tower-workflows', loadChildren: () => import('./modules/tower-workflows/tower-workflows.module').then(m => m.TowerWorkflowsModule) },   
      { path: 'workflows', loadChildren: () => import('./modules/workflows/workflows.module').then(m => m.WorkflowsModule) },
      { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },

    ]
  },
  { 
    path: 'auth', 
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) 
  },
  
  
  


  
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
