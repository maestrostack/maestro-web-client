import { Component, OnInit, OnDestroy, AfterViewInit, AfterContentInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paginated } from '@feathersjs/feathers';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../core/services/data.service';
import { jsPlumb } from 'jsplumb';
import { NodeService } from './node.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

	terraformModules$: Observable<any>;
  ansibleWorkflows$: Observable<any>;
    

    nodes = [];

    nodes$: Observable<any>;

    workflow: any;

    connections = [];



  rootDirectory: any[] = [
    {
        name: "Terraform Modules",
        icon: "terraform",
        expanded: true,
        files: [
            {
                icon: "file",
                name: "Calendar",
                active: true
            },
            {
                icon: "line-chart",
                name: "Charts",
                active: false
            },
            {
                icon: "dashboard",
                name: "Dashboard",
                active: false
            },
            {
                icon: "map",
                name: "Maps",
                active: false
            },
            
        ]
    },
    {
        name: "Tower Workflows",
        icon: "ansible",
        expanded: true,
        files: [
            {
                icon: "file",
                name: "Cover Letter.doc",
                active: false
            },
            
        ]
    },
];

  constructor(
      private dataService: DataService,
      private nodeService: NodeService,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
		this.terraformModules$ = this.dataService.records$('api/terraform/modules', {})
			.pipe(
				map(( r: Paginated<any>) => r.data)
			)

		this.terraformModules$.subscribe( data => {

      for ( var d in data ) {
        data[d].node_type = 'terraform-module'
      }
			this.rootDirectory[0].files = data;
		})

		this.ansibleWorkflows$ = this.dataService.records$('api/tower/workflows', {})
			.pipe(
				map(( r: Paginated<any>) => r.data)
			)

		this.ansibleWorkflows$.subscribe( data => {
      for ( var d in data ) {
        data[d].node_type = 'tower-workflow'
      }
			  this.rootDirectory[1].files = data;
    });
        
        //this.fillFromJson();

    this.activatedRoute.params.subscribe( params => {
      this.workflow = params.id;
      this.nodes$ = this.dataService.records$('api/workflow-nodes', {
        parent_workflow: this.workflow
      })
      .pipe(
        map(( r: Paginated<any>) => r.data)
      )

      this.nodes$.subscribe( n => {
        console.log('\n\n ---- NODES ----')
        n.id = n._id;
        this.nodes = n;

        this.nodes.forEach( n => {
          n.id = n._id;
          this.nodeService.addDynamicNode(n);
        })

        
      })
    })
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
        left: dropEvent.dropPointPosition.pageY,
        top: dropEvent.dropPointPosition.pageX
      }

      this.dataService.createRecord('api/workflow-nodes', newNode);
      // this.nodeService.addDynamicNode({
      //     id: dropEvent.dragDataTransfer.name,
      //     top: 100,
      //     left: 200
      // });
  }

//   ngAfterViewInit() {
//     this.jsPlumbInstance = jsPlumb.getInstance();
//     this.jsPlumbInstance.draggable('Source')
//       this.jsPlumbInstance.draggable('Target1')
//       this.jsPlumbInstance.addEndpoint('Source', {
//         anchor: 'Right',
//         endpoint: 'Rectangle'
//       },{
//     isSource: true,
//     isTarget: true,
//     endpoint: 'Rectangle'
//     // connector: ['Straight']
//   })
//     console.log(this.jsPlumbInstance)
//   }

//   showConnectOnClick() {
//     this.showConnectionToggle = ! this.showConnectionToggle;
//     if ( this.showConnectionToggle) {
//     this.buttonName = 'Dissconnect';
//       this.connectSourceToTargetUsingJSPlumb();
//     } else {
//       this.buttonName = 'Connect';
//       this.jsPlumbInstance.reset();
//     }
//   }

//   onDropToUpload(dragEvent: ClrDragEvent<any>) {
//     console.log('dropped to upload');
//     console.log(dragEvent)
//     this.moveItem(dragEvent.dragDataTransfer, this.files, this.droppedFiles);
//   }

//   onDropBack(dragEvent: ClrDragEvent<any>) {
//     console.log('dropped back');
//     this.moveItem(dragEvent.dragDataTransfer, this.droppedFiles, this.files);
//   }

// connectSourceToTargetUsingJSPlumb() {
//     let labelName;
//       labelName = 'connection';
//       this.jsPlumbInstance.connect({
//         connector: ['Flowchart', {stub: [212, 67], cornerRadius: 1, alwaysRespectStubs: true}],
//         source: 'Source',
//         target: 'Target1',
//         anchor: ['Right', 'Left'],
//         paintStyle: {stroke: '#456', strokeWidth: 4},
//         overlays: [
//           ['Label', {label: labelName, location: 0.5, cssClass: 'connectingConnectorLabel'}]
//         ],
//       });
//   }


  fillFromJson() {
    const json = `{"nodes":[{"id":"Step_0 id: b46a17","top":177,"left":146},{"id":"Step_1 id: efd2ce","top":302,"left":130},{"id":"Step id_2eb091","top":41,"left":158}],"connections":[{"uuids":["Step_0 id: b46a17_bottom","Step_1 id: efd2ce_top"]},{"uuids":["Step id_2eb091_bottom","Step_0 id: b46a17_top"]}]}`;
    const data = JSON.parse(json);
   
    this.nodes = data.nodes;
    this.connections = data.connections;
  }

}
