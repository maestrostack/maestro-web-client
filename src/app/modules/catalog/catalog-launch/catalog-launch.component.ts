import { Component, OnInit, OnDestroy, AfterViewInit, AfterContentInit, Input, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paginated } from '@feathersjs/feathers';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { AuthService } from '../../core/services/auth.service';
import { ClrWizard } from '@clr/angular';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-catalog-launch',
  templateUrl: './catalog-launch.component.html',
  styleUrls: ['./catalog-launch.component.scss']
})
export class CatalogLaunchComponent implements OnInit {

  @ViewChild("wizard") wizard: ClrWizard;

  loading: boolean = true;

  item: any;
  workflowId: any;

  routeParams: Subscription;

  stack = {}

  workflow$: Observable<any>;


  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( p => {
      this.workflowId = p.workflow;
      this.workflow$ = this.dataService.record$('workflows', p.workflow);

      this.workflow$.subscribe( w => {
        

        this.dataService.findRecords('workflow-blocks', {
          parent_workflow: this.workflowId
        })
        .then( res => {
          // console.log('\n\n ---- WORKFLOW NODES ---- ');
          // console.log(res.data);
          w.workflow_nodes = res.data;

          return w
        })
        .then( () => {
          // console.log('\n\n ---- WORKFLOW AFTER NODES ----');
          // console.log(w);

          w.workflow_nodes.forEach( n => {
            this.dataService.findRecords('workflow-block-variables', {
              parent: `${n._id}`
            })
            .then( nodeVars => {
              // console.log('\n\n ---- NODE VARS ----');
              // console.log(nodeVars);

              n.variables = nodeVars.data;
              n.current_vars = {};

              n.variables.forEach( v => {
                n.current_vars[v.name] = v.default_value;
              })

              // console.log('\n\n ---- AFTER NODE VARS ----');

              // console.log(w)

              this.item = w;

              this.loading = false;
            })

          })

        })
      })
    });
    
  }

  submitRequest() {

    let request = {
      name: this.item.name,
      description: this.item.description,
      parent_workflow: this.item._id,
      parent: this.item._id,
      state: 'new',
      working: false,
      ui_start_icon: 'current',
      ui_start_header: 'APPROVAL',
      ui_start_msg: 'Waiting on approval before moving forward.',
      ui_end_icon: 'current',
      ui_end_msg: '',
      stage: 'approval',
      request_state: 'needs_approval',
      overall_state: 'needs_approval',
      // activities: this.item.workflow_nodes[0],
      substage: null,
      current_work_item: null,
      has_issues: false,
      has_questions: false
    }
    // this.item.request_state = 'needs_approval';
    // this.item.overall_state = 'needs_approval';
    // this.item.stage = 'approval';
    // this.item.substage = null;
    // this.item.has_issues = false;
    // this.item.state = 'needs_approval';

    this.dataService.createRecord('requests', request)
      .then( res => {
        let stackId = res._id;

        this.item.workflow_nodes.forEach( n => {


          let activity = {
            state: 'new',
            start: n.start,
            working: false,
            ui_state_icon: 'not-started',
            ui_state_error: false,
            ui_state_error_msg: null,
            ui_state_success: false,
            ui_state_success_msg: null,
            ui_console_out: null,
            current_vars: n.current_vars,
            parent_request: stackId,
            parent_workflow: this.item._id,
            parent_workflow_block: n._id,
            parent_block: n.parent_block,
            parent_block_type: n._type
          }
          // n.state = 'new',
          // n._request = stackId;
          // n.working = false;
          // n.ui_state_icon = 'not-started';
          // n.ui_state_error = false;
          // n.ui_state_error_msg = null;
          // n.ui_state_success = false;
          // n.ui_state_success_msg = null;
          // n.ui_console_out = '';


          // delete n['variables'];
          // delete n['_id'];

          // console.log(n)

          this.dataService.createRecord('request-activities', activity);
        });

        return stackId;
      })
      .then( stackId => {
        //this.router.navigate(['/pages/requests/details', stackId]);
      })
  }

}
