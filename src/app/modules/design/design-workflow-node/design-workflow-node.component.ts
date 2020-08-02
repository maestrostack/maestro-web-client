import { Component, OnInit, Input } from '@angular/core';
import { TreelistService } from '../treelist.service';
import { DataService } from '../../core/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-design-workflow-node',
  templateUrl: './design-workflow-node.component.html',
  styleUrls: ['./design-workflow-node.component.scss']
})
export class DesignWorkflowNodeComponent implements OnInit {

  @Input('node') node: any;
  

  workflow: any;

  selectedNodeID: string;
  nodeId: string;
  ticks = 0;
  public hideChildrenList;
  mouseDownX: string;
  mouseDownY: string;

  currentlyHoveringId: string;

  constructor(
    private treelistsvc: TreelistService,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {

    this.activatedRoute.params.subscribe(p => {
      this.workflow = p.id;
    })

    this.treelistsvc.hideChilrenToggler$.subscribe((status) => {
      this.hideChildrenList = treelistsvc.hideChildrenOfIds;
    });
    this.treelistsvc.hoverNodeToggler$.subscribe((status) => {
      this.currentlyHoveringId = treelistsvc.currentlyHoveringId;
    });
    this.hideChildrenList = [];
  }

  ngOnInit(): void {
  }


  updateSelectedNode(node) {
    this.treelistsvc.showDetails(node);
  }


  shouldShowPopup(id) {
    return this.currentlyHoveringId === id;
  }

  hideChilren(id) {
    this.treelistsvc.hideNodeChilren(id);
  }

  mouseDown(nodeID: string, selectedNode, event) {
    // console.log('mouse down: ' + this.ticks);
    if (event.target.id !== 'expandbutton') {
      this.mouseDownX = event.clientX;
      this.mouseDownY = event.clientY;
    }
  }

  mouseUp(nodeID: string, selectedNode, event) {
    if (event.target.id !== 'expandbutton' && event.target.id !== 'addbutton') {
      if (this.mouseDownX === event.clientX && this.mouseDownY === event.clientY) {
        // this.sidenav.setFocusNode(nodeID, selectedNode);
      } 
      // else if (selectedNode !== this.sidenav.getFocusNode()) {
      //   // this.sidenav.setFocusNode(nodeID, selectedNode);
      // }
    }
  }

  getSelectedNodeID() {
    // return this.sidenav.getFocusNodeId();
  }

  mouseEnter(id, event) {
    // console.log('enter');
    // console.log(id)
    this.treelistsvc.setCurrentlyHoveringId(id);
  }

  mouseLeave(id, event) {
    // console.log('leaving');
    this.treelistsvc.setCurrentlyHoveringId('');
  }

  nodeClicked(nodeID: string, selectedNode, event) {
    // this.sidenav.setFocusNode(nodeID, selectedNode);
    // console.log(this.ticks);
  }

  shouldHideChildren(id) {
    return this.treelistsvc.hideChildrenOfIds.includes(id);
  }

  addChild(id) {
    this.dataService.createRecord('workflow-blocks', {
      parent_activity: id,
      parent_workflow: this.workflow,
      start: false,
      name: 'A NEW CHILD',
      children: []
    })
    .then( res => {
      console.log(res);
      this.treelistsvc.addChild(id, res);
    })
    // console.log('add child to ' + id);
    
  }

  onResourceDrop(event, parent) {
    let blockData = event.dragDataTransfer;

    console.log(blockData)
    this.dataService.createRecord('workflow-blocks', {
      type: blockData._type,
      parent_block: `${blockData._id}`,
      parent: `${parent}`,
      start: false,
      name: blockData.name,
      icon: blockData.icon,
      parent_activity: `${parent}`,
      parent_workflow: `${this.workflow}`,
      children: []
    })
    .then( res => {
      console.log(res);
      this.treelistsvc.addChild(parent, res);
    })
    console.log(event);
    console.log('Parent ' + parent);
  }


}
