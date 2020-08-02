import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';

import { MonacoEditorModule } from 'ngx-monaco-editor';


import { AngularSplitModule } from 'angular-split';
import { DesignComponent } from './design.component';
import { SharedModule } from '../shared/shared.module';
import { ClarityModule } from '@clr/angular';
import { WorkflowStudioRootComponent } from './workflow-studio-root/workflow-studio-root.component';
import { NodesContainerComponent } from './nodes-container/nodes-container.component';
import { NodeService } from './node.service';
import { NodeComponent } from './node.component';
import { WorkflowNodeDetailsComponent } from './workflow-node-details/workflow-node-details.component';
import { DesignHomeComponent } from './design-home/design-home.component';
import { DesignBlocksComponent } from './design-blocks/design-blocks.component';
import { DesignWorkflowsComponent } from './design-workflows/design-workflows.component';
import { DesignProvidersComponent } from './design-providers/design-providers.component';
import { DesignBlockTypesComponent } from './design-block-types/design-block-types.component';
import { DesignWorkflowEditorComponent } from './design-workflow-editor/design-workflow-editor.component';
import { DesignWorkflowPaletteComponent } from './design-workflow-palette/design-workflow-palette.component';
import { DesignWorkflowTreeComponent } from './design-workflow-tree/design-workflow-tree.component';
import { DesignWorkflowNodeComponent } from './design-workflow-node/design-workflow-node.component';
import { DesignCustomIconsComponent } from './design-custom-icons/design-custom-icons.component';


@NgModule({
  declarations: [DesignComponent, WorkflowStudioRootComponent, NodesContainerComponent, NodeComponent, WorkflowNodeDetailsComponent, DesignHomeComponent, DesignBlocksComponent, DesignWorkflowsComponent, DesignProvidersComponent, DesignBlockTypesComponent, DesignWorkflowEditorComponent, DesignWorkflowPaletteComponent, DesignWorkflowTreeComponent, DesignWorkflowNodeComponent, DesignCustomIconsComponent],
  imports: [
    CommonModule,
    ClarityModule,
    SharedModule,
    AngularSplitModule,
    MonacoEditorModule.forRoot(),
    DesignRoutingModule
  ],
  exports: [

  ],
  entryComponents: [
    NodeComponent
  ],
  providers: [
    NodeService
  ]
})
export class DesignModule { }
