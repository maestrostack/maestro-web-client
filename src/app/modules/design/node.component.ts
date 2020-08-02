import { Component, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { NodeService } from './node.service';

export interface Node {
  id: string,
  _id: string;
  type: string,
  name: string,
  icon: string,
  parent_workflow: string,
  top?: number;
  left?: number
}



@Component({
  selector: 'node',
  templateUrl: './node.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NodeComponent implements AfterViewInit {
  @Input() node: any;

  @Input('showNodeConfig') showNodeConfig: any;

  @Input() jsPlumbInstance;


  connectorPaintStyle = {
    strokeWidth: 2,
    stroke: "#61B7CF",
    joinstyle: "flow",
    outlineStroke: "white",
    outlineWidth: 0
  }
  // .. and this is the hover style.
  connectorHoverStyle = {
    strokeWidth: 5,
    stroke: "#216477",
    outlineWidth: 0,
    outlineStroke: "white"
  }
  endpointHoverStyle = {
    fill: "#216477",
    stroke: "#216477"
  }
  // the definition of source endpoints (the small blue ones)
  sourceEndpoint = {
    endpoint: "Dot",
    paintStyle: {
        stroke: "#7AB02C",
        fill: "transparent",
        radius: 10,
        strokeWidth: 2
    },
    isSource: true,
    connector: [ "Flowchart", { stub: [40, 60], gap: 10, cornerRadius: 5, alwaysRespectStubs: true } ],
    connectorStyle: this.connectorPaintStyle,
    hoverPaintStyle: this.endpointHoverStyle,
    connectorHoverStyle: this.connectorHoverStyle,
    dragOptions: {},
    overlays: [
        [ "Label", {
            location: [0.5, 1.5],
            label: "OUT",
            cssClass: "endpointSourceLabel",
            visible:true
        } ]
    ]
  }
  // the definition of target endpoints (will appear when the user drags a connection)
  targetEndpoint = {
    endpoint: "Dot",
    paintStyle: { fill: "#7AB02C", radius: 10 },
    hoverPaintStyle: this.endpointHoverStyle,
    maxConnections: 10,
    dropOptions: { hoverClass: "hover", activeClass: "active" },
    isTarget: true,
    overlays: [
        [ "Label", { location: [0.5, 1.5], label: "IN", cssClass: "endpointTargetLabel", visible:true } ]
    ]
  }


  sourceAnchors = [
    [ 0, 1, 0, 1 ],
    [ 0.25, 1, 0, 1 ],
    [ 0.5, 1, 0, 1 ],
    [ 0.75, 1, 0, 1 ],
    [ 1, 1, 0, 1 ]
  ];

  constructor(
    private nodeService: NodeService
  ) {

  }


  handleClick(event, node) {
    if(event.metaKey) {
      let endpoints = this.jsPlumbInstance.getEndpoints(node._id)
      console.log(endpoints)
      if(endpoints.length == 2) {
        this.jsPlumbInstance.addEndpoint(node._id, { anchor: 'TopRight', uuid: node._id + new Date() }, this.sourceEndpoint);
      }
      else {

          alert('NO MORE!')

      }
      
    }
  }

  ngAfterViewInit() {



    // this is the paint style for the connecting lines..

    const id = this.node._id;
    
    this.jsPlumbInstance.batch( () => {
      this._addEndpoints(id, ["BottomRight"], ["TopLeft"]);
    })
    
    //this.jsPlumbInstance.fire("jsPlumbDemoLoaded", this.jsPlumbInstance);
    //this.jsPlumbInstance.addEndpoint(id, { anchor: 'TopCenter', uuid: id + '_top' }, targetEndpoint);
    this.jsPlumbInstance.draggable(id);




    console.log(this.jsPlumbInstance);
  }
  _addEndpoints (toId, sourceAnchors, targetAnchors) {
    for (var i = 0; i < sourceAnchors.length; i++) {
        var sourceUUID = toId + sourceAnchors[i];
        this.jsPlumbInstance.addEndpoint(toId, this.sourceEndpoint, {
            anchor: sourceAnchors[i], uuid: sourceUUID
        });
    }
    for (var j = 0; j < targetAnchors.length; j++) {
        var targetUUID = toId + targetAnchors[j];
        this.jsPlumbInstance.addEndpoint(toId, this.targetEndpoint, { anchor: targetAnchors[j], uuid: targetUUID });
    }
  };

  loadNodeDetails(n) {
    console.log('\n\n---- NODE ----');
    console.log(n)
    this.nodeService.showDetails(n);
  }
}


