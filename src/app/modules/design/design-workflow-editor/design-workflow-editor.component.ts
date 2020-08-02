import { Component, OnInit, OnDestroy, AfterViewInit, AfterContentInit, ViewEncapsulation, Input, ViewContainerRef, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paginated } from '@feathersjs/feathers';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { NodeService } from '../node.service';
import { AuthService } from '../../core/services/auth.service';
import { TreelistService } from '../treelist.service';
 
// @ts-ignore
import data from '../../../../assets/DatabaseLayout.json';


@Component({
  selector: 'app-design-workflow-editor',
  templateUrl: './design-workflow-editor.component.html',
  styleUrls: ['./design-workflow-editor.component.scss']
})
export class DesignWorkflowEditorComponent implements OnInit, AfterViewInit {

  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code: string= 'function x() {\nconsole.log("Hello world!");\n}';

  treeLists = [];
  currentlySelectedTree;
  currentlySelectedTreeId;

  blocks$: Observable<any>;
  ansibleWorkflows$: Observable<any>;
  pwshScripts$: Observable<any>;
    

  nodes = [];

  activities$: Observable<any>;

  text = 'hi'

  loading: boolean = true;

  nodes$: Observable<any>;
  connections$: Observable<any>;

  workflow: any;

  connections = [];

  showNodeConfig: boolean = false;
  currentNode: any = null;

  @ViewChild('nodes', { read: ViewContainerRef }) viewContainerRef;

  constructor(
    private dataService: DataService,
    private nodeService: NodeService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private treelistsvc: TreelistService
  ) {

  }

  ngOnInit(): void {

    this.treelistsvc.showNodeDetails.subscribe( t => {
      console.log(t);
      this.showNodeConfig = t;
    });

    this.treelistsvc.currentNodeDetails.subscribe( d => {
      this.currentNode = d;
    })

		this.blocks$ = this.dataService.records$('blocks', {})
			.pipe(
				map(( r: Paginated<any>) => r.data)
      )
      
    this.activatedRoute.params.subscribe( p => {
      console.log(p)
      this.workflow = p.id;
    })

    // this.loading = false;



    // for (const c of data.children) {
    //   const alist = [];
    //   alist.push(c);
    //   this.treeLists.push([alist]);
    // }

    // this.treelistsvc.setCurrentlySelectedTree(this.treeLists[0]);
    // this.currentlySelectedTree = treelistsvc.currentlySelectedTree;
    // this.currentlySelectedTreeId = this.currentlySelectedTree[0][0].id;

    console.log(this.workflow);
    this.dataService.findRecords('workflow-blocks', {
      parent_workflow: `${this.workflow}`,
      start: true
    })
    .then( res => {


      console.log('---- WORKFLOW BLOCKS -----');
      console.log(res)

      let nodeCount = 10;
      res.data.forEach( n => {
        // this.nodeService.addDynamicNode(n);
        console.log(n)
        n.id = n._id

        this.nodes.push(n)

        console.log(n)



      
      })
      
    })
    .then( () => {
      // this.loading = false;
      this.treelistsvc.treeToggler$.subscribe((status) => {
        this.currentlySelectedTree = this.treelistsvc.currentlySelectedTree;
        this.currentlySelectedTreeId = this.treelistsvc.currentlySelectedTreeId;
        this.treelistsvc.clearHiddenChildren();
      });
  
      // // // for (const c of this.nodes) {
      // // //   console.log(c)
      // // //   const alist = [];
      // // //   alist.push(c);
      // // //   this.treeLists.push([alist]);

      // // //   console.log(this.treeLists)
      // // // }

      this.loading = false;
  
      console.log('--- NODES ---')
      console.log(this.nodes);
      this.treeLists.push([this.nodes]);
      this.treelistsvc.setCurrentlySelectedTree(this.treeLists[0]);
      this.currentlySelectedTree = this.currentlySelectedTree;
      this.currentlySelectedTreeId = this.currentlySelectedTree[0][0].id;
    })


    


  }

  ngAfterViewInit() {

    // this.nodeService.showNodeDetails$.subscribe( t => {
    //   this.showNodeConfig = t;
    // });

    // this.nodeService.currentNodeDetails$.subscribe( n => {
    //   this.currentNode = n;
    // });

    // this.nodeService
    // this.nodeService.setRootViewContainerRef(this.viewContainerRef);




    // this.activities$ = this.dataService.records$('workflow-activities', {
    //   parent_workflow: this.workflow
    // })
    // .pipe(
    //   map(( r: Paginated<any>) => r.data)
    // )

  }





  loadConnections() {
    this.dataService.getRecord('workflows', this.workflow)
      .then( wf => {
        if(wf.node_connections) {
          wf.node_connections.forEach( c => {
            this.nodeService.addConnection(c);
          });
        }

      });
  }

  saveWorkflow() {

  }

  onResourceDrop(event: any) {
    console.log(event);
  }

}
