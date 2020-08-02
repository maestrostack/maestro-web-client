import { Component, OnInit, OnDestroy, AfterViewInit, AfterContentInit, ViewEncapsulation, Input, ViewContainerRef, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paginated } from '@feathersjs/feathers';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../core/services/data.service';

import { NodeService } from './node.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']

})
export class DesignComponent implements OnInit, AfterViewInit {

	blocks$: Observable<any>;
  ansibleWorkflows$: Observable<any>;
  pwshScripts$: Observable<any>;
    
 
  nodes = [];

  loading: boolean = true;

  nodes$: Observable<any>;
  connections$: Observable<any>;

  workflow: any;

  connections = [];

  showNodeConfig: boolean = false;
  currentNode: any = null;


  constructor(
      private dataService: DataService,
      private nodeService: NodeService,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

		// this.terraformModules$ = this.dataService.records$('api/terraform/modules', {})
		// 	.pipe(
		// 		map(( r: Paginated<any>) => r.data)
		// 	)

		// this.terraformModules$.subscribe( data => {

    //   for ( var d in data ) {
    //     data[d].node_type = 'terraform-module'
    //   }
		// 	this.rootDirectory[0].files = data;
		// })

		// this.ansibleWorkflows$ = this.dataService.records$('api/tower/workflows', {})
		// 	.pipe(
		// 		map(( r: Paginated<any>) => r.data)
		// 	)

    // this.pwshScripts$ = this.dataService.records$('api/scripts/pwsh', {})
		// 	.pipe(
		// 		map(( r: Paginated<any>) => r.data)
		// 	)
		// this.ansibleWorkflows$.subscribe( data => {
    //   for ( var d in data ) {
    //     data[d].node_type = 'tower-workflow'
    //   }
		// 	  this.rootDirectory[1].files = data;
    // });
        
        //this.fillFromJson();

    // this.activatedRoute.params.subscribe( params => {
    //   this.workflow = params.id;
    //   // this.nodes$ = this.dataService.records$('api/workflow-nodes', {
    //   //   parent_workflow: this.workflow,
    //   //   $sort: {
    //   //     order: 1
    //   //   }
    //   // })
    //   // .pipe(
    //   //   map(( r: Paginated<any>) => r.data)
    //   // )

    //   // this.connections$ = this.dataService.records$('api/workflow-connections', {
    //   //   parent_workflow: this.workflow
    //   // })
    //   // .pipe(
    //   //   map(( r: Paginated<any>) => r.data)
    //   // )

    // })
  }

  // loadConnections() {
  //   this.dataService.getRecord('api/catalog-workflows', this.workflow)
  //     .then( wf => {
  //       if(wf.node_connections) {
  //         wf.node_connections.forEach( c => {
  //           this.nodeService.addConnection(c);
  //         });
  //       }

  //     });
  // }

  ngAfterViewInit() {

    // this.nodeService.showNodeDetails$.subscribe( t => {
    //   this.showNodeConfig = t;
    // });

    // this.nodeService.currentNodeDetails$.subscribe( n => {
    //   this.currentNode = n;
    // });

    // this.nodeService
    // this.nodeService.setRootViewContainerRef(this.viewContainerRef);

    // this.dataService.findRecords('api/workflow-nodes', {
    //   parent_workflow: this.workflow
    // })
    // .then( res => {

    //   let nodeCount = 0;
    //   res.data.forEach( n => {
    //     this.nodeService.addDynamicNode(n);

      
    //   })
      
    // })
    // .then( () => {
    //   setTimeout( () => {
    //     this.loadConnections();
    //     this.loading = false;
    //   }, 5000);
    // })
  }


  openFile(directoryName: string, fileName: string) {
  }

  files: any[] = [{ name: 'img_001.jpg' }, { name: 'img_002.jpg' }, { name: 'img_003.jpg' }];
  activeDemoVariant = 'basic-draggable';
  droppedFiles: any[] = [];

  private moveItem(item: any, from: any[], to: any[]) {
    const indexInFiles = from.indexOf(item);
    if (indexInFiles > -1) {
      from.splice(indexInFiles, 1);
    }
    if (to.indexOf(item) === -1) {
      to.push(item);
    }
  }

//   {"id":"Step_0 id: b46a17","top":177,"left":146}
  onResourceDrop(dropEvent) {
      console.log(dropEvent)

      let newNode = {
        type: dropEvent.dragDataTransfer.node_type,
        parent: dropEvent.dragDataTransfer._id,
        parent_workflow: this.workflow,
        icon: dropEvent.dragDataTransfer.icon,
        name: dropEvent.dragDataTransfer.name,
        description: dropEvent.dragDataTransfer.description,
        left: dropEvent.dropPointPosition.pageX - 216,
        top: dropEvent.dropPointPosition.pageY - 60,
        order: dropEvent.dropPointPosition.pageY - 60
      }

      

      this.dataService.createRecord('api/workflow-nodes', newNode)
        .then( n => {
          this.nodeService.addDynamicNode(n);
        })
      // this.nodeService.addDynamicNode({
      //     id: dropEvent.dragDataTransfer.name,
      //     top: 100,
      //     left: 200
      // });
  }

  configureNode(n) {
    this.showNodeConfig = true;
    this.currentNode = n;
  }
  deleteNode(n) {
    if( this.currentNode._id == n._id ) {
      this.showNodeConfig = false;
    };

    this.dataService.updateRecord('api/workflow-nodes', n._id, { deleted: true });
  }


  // onSaveWorkflow() {

  //     //save element position on Canvas and node conections
  
  //     const container = this.viewContainerRef.element.nativeElement.parentNode;
  //     const nodes = Array.from(container.querySelectorAll('.node')).map((node: HTMLDivElement) => {
  //       return {
  //         id: node.id,
  //         top: node.offsetTop,
  //         left: node.offsetLeft
  //       }
  //     });
  
  //     nodes.forEach( n => {
  //       this.dataService.updateRecord('api/workflow-nodes', n.id, n);
  //     })
  
  //     const connections = (this.nodeService.jsPlumbInstance.getAllConnections() as any[])
  //         .map((conn) => ({ uuids: conn.getUuids() }));

  //     this.dataService.updateRecord('api/catalog-workflows', this.workflow, { node_connections: connections })
  
  //     // connections.forEach( (c:any)=> {
  //     //   c.parent_workflow = this.workflow;
  //     //   this.dataService.findRecords('api/workflow-connections', {
  //     //     parent_workflow: this.workflow
  //     //   })
  //     //   .then( res => {
  
  //     //   })
  //     //   .then( () => {
  //     //     // res.data.forEach(w => {
  //     //     //   this.dataService.deleteRecord('api/workflow-connections', w._id, w);
  //     //     // });
  //     //     this.dataService.createRecord('api/workflow-connections', c);
  //     //   })
  
        
  //     // })
  
  //     // const json = JSON.stringify({ nodes, connections });
  
  //     // console.log(json);

  // }

}
