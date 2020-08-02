import { Component, OnInit, OnDestroy, AfterViewInit, AfterContentInit, Input, OnChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paginated } from '@feathersjs/feathers';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { NodeService } from '../node.service';
import { TreelistService } from '../treelist.service';


@Component({
  selector: 'workflow-node-details',
  templateUrl: './workflow-node-details.component.html',
  styleUrls: ['./workflow-node-details.component.scss']
})
export class WorkflowNodeDetailsComponent implements OnInit, OnDestroy { 

  @Input('node') node: any;
  @Input('showDetails') showDetails: boolean;

  table: any;

  parentVariables$: Observable<any>;
  parent$: Observable<any>;

  node_vars = [];

  currentNode$: Observable<any>;
  showDetails$: Observable<any>;

  constructor(
    private dataService: DataService,
    private nodeService: NodeService
  ) { }

  ngOnDestroy() {
    this.node = null;
  }



  ngOnInit(): void {

    console.log(this.node)

    if(this.node.type == 'terraform-module') {
      this.parentVariables$ = this.dataService.records$('api/terraform/module-variables', {
        parent: this.node.parent
      })
      .pipe(
        map(( r: Paginated<any>) => r.data)
      )

      this.parentVariables$.subscribe( vars => {

        vars.forEach(v => {
          this.node_vars.push(v);
        });
        

        // this.dataService.createRecord('api/workflow-node-variables', v);
      })

      this.parent$ = this.dataService.record$('api/terraform/module', this.node.parent);

    }

  }

  addNodeConnector() {

  }

  saveNode(){
    this.dataService.updateRecord('workflow-blocks', this.node._id, this.node);
  }

  deleteNode() {
    this.dataService.findRecords('workflow-block-variables', {
      parent: this.node._id
    })
    .then( res => {
      res.data.forEach( r => {
        this.dataService.deleteRecord('workflow-block-variables', r._id, r);
      });

      this.dataService.deleteRecord('workflow-blocks', this.node._id, this.node);
    });


    // this.dataService.updateRecord('workflow-blocks', this.node._id, { deleted: true });
  }

  syncVariablesFromParentModule() {

    console.log('sync')
    console.log(this.node)

    this.dataService.findRecords('block-variables', {
      parent: `${this.node.parent_block}`
    })
    .then( res => {
      res.data.forEach( v => {
        v.parent = `${this.node._id}`;
        // v.parent_module = v.parent;

        v._id = this.node._id + v._id;

        console.log(v)


        this.dataService.getRecord('workflow-block-variables', v._id)
          .then( res => {
            console.log(res);
            this.dataService.updateRecord('workflow-block-variables', v._id, v);
          })
          .catch( err => {
            console.log(err)
            this.dataService.createRecord('workflow-block-variables', v);
          })

      });
    })
  }

}
