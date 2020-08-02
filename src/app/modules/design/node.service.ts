import {
  ComponentRef,
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector
} from '@angular/core';
import { jsPlumb } from 'jsplumb';

import { NodeComponent, Node } from './node.component';
import { Subscribable, Subject } from 'rxjs';

@Injectable()
export class NodeService {

  private rootViewContainer: any;

  showNodeDetails = new Subject<boolean>();
  showNodeDetails$ = this.showNodeDetails.asObservable();

  currentNodeDetails = new Subject<any>();
  currentNodeDetails$ = this.currentNodeDetails.asObservable();

  jsPlumbInstance = jsPlumb.getInstance({
    // drag options
    DragOptions: { cursor: "pointer", zIndex: 2000 },
    // default to a gradient stroke from blue to green.
    PaintStyle: {
      // @ts-ignore
        gradient: { stops: [
            [ 0, "#0d78bc" ],
            [ 1, "#558822" ] 
        ] },
        stroke: "#558822",
        strokeWidth: 10
    },
    Container: "canvas"
});

  constructor(private factoryResolver: ComponentFactoryResolver) { }

  public setRootViewContainerRef(viewContainerRef) {
    console.log('\n\n ---- SET VIEW ----');
    console.log(viewContainerRef);
    this.rootViewContainer = viewContainerRef;
  }

  public addDynamicNode(node: any) {
    const factory = this.factoryResolver.resolveComponentFactory(NodeComponent);
    const component = factory.create(this.rootViewContainer.parentInjector);
    (<any>component.instance).node = node;
    (<any>component.instance).jsPlumbInstance = this.jsPlumbInstance;
    this.rootViewContainer.insert(component.hostView);
    //console.log("in NodeService.." , component.instance );
  }
 
  addConnection(connection) {
    //console.log(connection)
    this.jsPlumbInstance.connect({ uuids: connection.uuids });
  }

  showDetails(node) {
    this.currentNodeDetails.next(node);
    this.showNodeDetails.next(true);
  }

  hideDetails() {
    this.showNodeDetails.next(false)
  }

  setCurrentNode() {
    
  }

  public clear() {
    this.rootViewContainer.clear();
  }
}

