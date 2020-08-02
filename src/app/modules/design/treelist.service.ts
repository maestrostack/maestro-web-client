import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TreelistService {
  public newId = 30;
  private treeToggler = new Subject<any>();
  treeToggler$ = this.treeToggler.asObservable();
  private hideChilrenToggler = new Subject<any>();
  hideChilrenToggler$ = this.hideChilrenToggler.asObservable();
  private hoverNodeToggler = new Subject<any>();
  hoverNodeToggler$ = this.hoverNodeToggler.asObservable();

  showNodeDetails = new Subject<boolean>();
  showNodeDetails$ = this.showNodeDetails.asObservable();

  currentNodeDetails = new Subject<any>();
  currentNodeDetails$ = this.currentNodeDetails.asObservable();

  hideChildrenOfIds = [];
  public treelist;
  public currentlySelectedTree;
  public currentlySelectedTreeId;
  public currentlyHoveringId;
  constructor() { }

  setCurrentlyHoveringId(id) {
    this.currentlyHoveringId = id;
    this.hoverNodeToggler.next(true);
  }

  getCurrentlyHoveringId() {
    return this.currentlyHoveringId;
  }

  setCurrentlySelectedTree(t) {
    console.log('---- SET ----')
    console.log(t)
    this.currentlySelectedTree = t;
    this.currentlySelectedTreeId = t[0][0]._id;
    this.treeToggler.next(true);
  }



  setTreeList(tl) {
    this.treelist = tl;
  }

  clearHiddenChildren() {
    this.hideChildrenOfIds = [];
  }
  hideNodeChilren(id) {
    if (this.hideChildrenOfIds.includes(id)) {
      const index = this.hideChildrenOfIds.indexOf(String(id));
      this.hideChildrenOfIds.splice(index, 1);
    } else {
      this.hideChildrenOfIds.push(id);
      this.hideChilrenToggler.next(true);
      console.log(this.hideChildrenOfIds);
    }
  }

  addChild(id, data) {
    console.log('add child to ' + id);
    console.log(this.currentlySelectedTree[0][0]);

    const childArray = this.getChildrenOfID(this.currentlySelectedTree[0][0], id);
    console.log('---- CHILD ARRAY ----');
    
    console.log(childArray);
    childArray.push(data);
    this.newId = this.newId + 1;
  }



  getChildrenOfID(tree, id) {
    const stack = [tree];
    console.log('---- STACK ----');
    console.log(stack);
    while (stack.length) {
        const current = stack.pop();
        console.log('---- CURRENT ----');
        console.log(current);
        if (current._id === id) {
          return current.children;
        }
        stack.push(...current.children);
    }
  }

  hideChild(id) {

  }

  showDetails(node) {
    console.log('---- SHOW SERVICE ----');
    this.currentNodeDetails.next(node);
    this.showNodeDetails.next(true);
  }

  hideDetails() {
    this.showNodeDetails.next(false)
  }
}
