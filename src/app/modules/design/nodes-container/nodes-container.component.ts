import { Component, OnInit, OnChanges, Input, ChangeDetectionStrategy, ViewContainerRef, ViewChild, ComponentFactoryResolver, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { NodeService } from '../node.service';
import { DataService } from '../../core/services/data.service';
import { Subject, Subscribable } from 'rxjs';



@Component({
  selector: 'nodes-container',
  templateUrl: './nodes-container.component.html',
  styleUrls: ['./nodes-container.component.scss'],
  encapsulation: ViewEncapsulation.None
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesContainerComponent implements OnInit, AfterViewInit {
  @Input() nodes = [];

  @Input() connections = [];

  @Input() workflow: any;

  @Input('showNodeConfig') showNodeConfig: any;

  

  // @ViewChild('nodes', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  @ViewChild('nodes', { read: ViewContainerRef }) viewContainerRef;

  constructor(
    private r: ComponentFactoryResolver,
    private nodeService: NodeService,
    private dataService: DataService
  ) {}

  ngOnInit() {

    

  }  

 


  loadConnections() {
    for ( var c in this.connections ) {
      this.nodeService.addConnection(this.connections[c])
    }

    return true;
  }

  ngAfterViewInit() {
    //console.log(this.viewContainerRef);
    this.nodeService.setRootViewContainerRef(this.viewContainerRef);

    //console.log(this.nodeService);


    let nodesAdded = 0;
    this.nodes.forEach(n => {
      this.nodeService.addDynamicNode(n);

      nodesAdded++;

      if(nodesAdded == this.nodes.length) {
        //this.loadConnections();

        console.log(nodesAdded);
        console.log(this.nodes.length)
      }
    })

    // this.connections.forEach(conn => {
    //   this.nodeService.addConnection(conn);
    // })
    
    // setTimeout(() => {
    //   this.connections.forEach(connection => {
    //     console.log(connection)
    //     this.nodeService.addConnection(connection);
    //   });
    // }, )
  }

  addNode() {

  }

  saveNodeJson(){
    //save element position on Canvas and node conections

    const container = this.viewContainerRef.element.nativeElement.parentNode;
    const nodes = Array.from(container.querySelectorAll('.node')).map((node: HTMLDivElement) => {
      return {
        id: node.id,
        top: node.offsetTop,
        left: node.offsetLeft
      }
    });

    nodes.forEach( n => {
      this.dataService.updateRecord('api/workflow-nodes', n.id, n);
    })

    const connections = (this.nodeService.jsPlumbInstance.getAllConnections() as any[])
        .map((conn) => ({ uuids: conn.getUuids() }));

    connections.forEach( (c:any)=> {
      c.parent_workflow = this.workflow;
      this.dataService.findRecords('api/workflow-connections', {
        parent_workflow: this.workflow
      })
      .then( res => {

      })
      .then( () => {
        // res.data.forEach(w => {
        //   this.dataService.deleteRecord('api/workflow-connections', w._id, w);
        // });
        this.dataService.createRecord('api/workflow-connections', c);
      })

      
    })

    const json = JSON.stringify({ nodes, connections });

    console.log(json);
  }
  
}