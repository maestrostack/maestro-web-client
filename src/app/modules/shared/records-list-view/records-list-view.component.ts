import { Component, OnInit, OnDestroy, AfterViewInit, Input, OnChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paginated } from '@feathersjs/feathers';
import { Router } from '@angular/router';
import { DataService } from '../../core/services/data.service';

import * as tableData from '../tables';
import { AuthService } from '../../core/services/auth.service';


@Component({
  selector: 'app-records-list-view',
  templateUrl: './records-list-view.component.html',
  styleUrls: ['./records-list-view.component.scss']
})
export class RecordsListViewComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {

  @Input('table') table: string;
  @Input('query') query: any = {};
  @Input('filterOnParent') filterOnParent: boolean = false;
  @Input('parentId') parentId: any;

  loading: boolean = true;
  addRecordLoading: boolean = false;

  currentTable: any;

  records$: Observable<any>;

  modules$: Observable<any>;

  service: string = 'api/terraform/modules';

  selected = [];

  addRecord: boolean = false;
  showCreateRecord: boolean = false;
  newRecord: any = {};


  currentUser: any;


  recordsLoaded: Subscription;



  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {

    //this.filterOnParent = false;
    
    this.authService.logIn()
      .then( res => {
        this.currentUser = res.user;
      })
      .catch( () => {
        this.router.navigate(['/auth/login']);
      })
  }

  loadData() {
    this.currentTable = tableData.tables[this.table];
    console.log('\n\n ---- TABLE ----');
    console.log(this.table);
    console.log(this.currentTable);

    console.log('\n\n FILTER ON PARENT');
    console.log(this.filterOnParent)
    console.log(this.filterOnParent)

    console.log('\n\n ---- PARENT ID ----');
    console.log(this.parentId)

    if(this.filterOnParent) {
      this.query = {
        parent: this.parentId
      }
    }

    this.currentTable.addRecordForm.fields.forEach( f => {
      if(f.type == 'select-reference') {
        this.dataService.findRecords(f.reference.servicePath, {})
          .then( res => {
            f.reference_options = res.data;
          })
          .then( () => {
            this.addRecordLoading = false;
          })
      }
    })

    // console.log(this.query);

    this.records$ = this.dataService.records$(this.currentTable.servicePath, this.query)
      .pipe(
        map(( r: Paginated<any>) => r.data)
      )


      // this.loading = false;

      this.recordsLoaded = this.records$.subscribe( records => {
        this.currentTable.listViewCols.forEach( c => {
          if(c.type == 'reference') {
            records.forEach( r => {
              if(r[c.name]) {
                console.log(r[c.name])
                this.dataService.getRecord(c.reference.servicePath, r[c.name])
                  .then( res => {
                    r[`${c.name}_current`] = res;
                  })
                  .catch( err => {
                    alert(err);
                  })
              }
            })
          }
        })

        this.loading = false;
      });

  }

  ngOnChanges() {
    this.loading = true;
    this.loadData();
  }

  ngAfterViewInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.recordsLoaded.unsubscribe();
  }

  createRecord() {
    let errors = [];
    for ( var f in this.currentTable.addRecordForm.fields ) {
      let req = this.currentTable.addRecordForm.fields[f].required;
      let length = this.newRecord[this.currentTable.addRecordForm.fields[f].name].length;

      if(req && length == 0) {
        errors.push(`${this.currentTable.addRecordForm.fields[f].label} is a required field`)
      }
    }


    // If this is a workflow add the root activity...



    if(errors.length == 0) {
      if(this.parentId) {
        this.newRecord['parent'] = this.parentId;
      }


      // tag record with a node type for use when executing the action or resource.
      if(this.currentTable.node_type) {
        this.newRecord.node_type = this.currentTable.node_type;
      }

      let dt = new Date();
      this.newRecord.created_at = dt;
      this.newRecord.updated_at = dt;
      this.newRecord.created_by = this.currentUser._id;
      this.newRecord.updated_by = this.currentUser._id;
      this.dataService.createRecord(this.currentTable.servicePath, this.newRecord)
        .then( data => {

          console.log(data);

          // if(this.currentTable.servicePath == 'api/workflows') {

          // }
          this.addRecord = false;
          this.showCreateRecord = false;
        })
        .catch(
          error => {

          }
        )
    } else {
      errors.forEach( e => {
        alert(e);
      })
    }



  }

  onCreateRecord() {

    this.showCreateRecord = true;

  }

  onEdit(r) {

  }

  onDelete(r) {

    // alert('TODO: Allow deletion of modules while making sure we do not break down stream stacks...')

    this.dataService.deleteRecord(this.currentTable.servicePath, r._id, r);

    // this.dataService.records$('api/terraform/module-variables', {
    //   _module: r._id
    // })
    // .pipe(
    //   map(( r: Paginated<any>) => r.total)
    // )
    // .subscribe( total => {
    //   if(total == 0) {
         
    //   }
    //   else {
    //     alert('');
    //   }
    // } )

  }




}
