import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignComponent } from './design.component';
import { WorkflowStudioRootComponent } from './workflow-studio-root/workflow-studio-root.component';
import { DesignHomeComponent } from './design-home/design-home.component';
import { DesignBlocksComponent } from './design-blocks/design-blocks.component';
import { DesignWorkflowsComponent } from './design-workflows/design-workflows.component';
import { DesignBlockTypesComponent } from './design-block-types/design-block-types.component';
import { DesignWorkflowEditorComponent } from './design-workflow-editor/design-workflow-editor.component';
import { DesignWorkflowTreeComponent } from './design-workflow-tree/design-workflow-tree.component';
import { DesignCustomIconsComponent } from './design-custom-icons/design-custom-icons.component';

const routes: Routes = [
  {
    path: '',
    component: DesignComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: DesignHomeComponent
      },
      {
        path: 'blocks',
        component: DesignBlocksComponent
      },
      {
        path: 'workflows',
        component: DesignWorkflowsComponent
      },
      {
        path: 'block-types',
        component: DesignBlockTypesComponent
      },
      {
        path: 'custom-icons',
        component: DesignCustomIconsComponent
      },
      {
        path: 'workflows/editor/:id',
        component: DesignWorkflowEditorComponent
      }
    ]
  },
  {
    path: 'tree',
    component: DesignWorkflowTreeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
