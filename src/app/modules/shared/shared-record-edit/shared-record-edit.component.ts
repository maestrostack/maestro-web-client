import { Component, OnInit, OnDestroy, AfterViewInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paginated } from '@feathersjs/feathers';
import { Router } from '@angular/router';
import { DataService } from '../../core/services/data.service';

import * as tableData from '../tables';

@Component({
  selector: 'app-shared-record-edit',
  templateUrl: './shared-record-edit.component.html',
  styleUrls: ['./shared-record-edit.component.scss']
})
export class SharedRecordEditComponent implements OnInit {

  @Input('table') table: any;
  @Input('record') record: any;

  loading: boolean = true; 

  editRecordTable: any;

  saveRecordSuccess: boolean = false;
  saveRecordError: boolean = false;


  selected = [];

  addRecord: boolean = false;
  showCreateRecord: boolean = false;
  newRecord = {}


  recordsLoaded: Subscription;


  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {

    //this.filterOnParent = false;
    

  }

  ngAfterViewInit() {
    // this.editRecordTable = tableData.tables[this.table];
    // console.log('\n\n ---- TABLE ----');
    // console.log(this.currentTable);

    // console.log('\n\n FILTER ON PARENT');
    // console.log(this.filterOnParent)
    // // console.log(this.filterOnParent)

    // console.log('\n\n ---- PARENT ID ----');
    // console.log(this.parentId)

    // if(this.filterOnParent) {
    //   this.query = {
    //     parent: this.parentId
    //   }
    // }

    // console.log(this.query);

    

    // this.records$ = this.dataService.records$(this.currentTable.servicePath, this.query)
    //   .pipe(
    //     map(( r: Paginated<any>) => r.data)
    //   )


    //   // this.loading = false;

    //   this.recordsLoaded = this.records$.subscribe( () => this.loading = false);

  }

  ngOnDestroy() {
    // this.recordsLoaded.unsubscribe();
  }

  createRecord() {
    // let errors = [];
    // for ( var f in this.currentTable.addRecordForm.fields ) {
    //   let req = this.currentTable.addRecordForm.fields[f].required;
    //   let length = this.newRecord[this.currentTable.addRecordForm.fields[f].name].length;

    //   if(req && length == 0) {
    //     errors.push(`${this.currentTable.addRecordForm.fields[f].label} is a required field`)
    //   }
    // }

    // if(errors.length == 0) {
    //   if(this.parentId) {
    //     this.newRecord['parent'] = this.parentId;
    //   }
    // this.dataService.createRecord(this.currentTable.servicePath, this.newRecord)
    //   .then( data => {
    //     this.addRecord = false;
    //   })
    //   .catch(
    //     error => {

    //     }
    //   )
    // } else {
    //   errors.forEach( e => {
    //     alert(e);
    //   })
    // }



  }

  onCreateRecord() {

    this.showCreateRecord = true;

  }

  updateRecord() {
    this.dataService.updateRecord(this.table.servicePath, this.record._id, this.record)
      .then( () => {
        this.saveRecordSuccess = true;

        setTimeout( () => {
          this.saveRecordSuccess = false;
        }, 3000);
      })

      .catch( () => {
        this.saveRecordError = true;

        setTimeout( () => {
          this.saveRecordError = false;
        }, 3000);
      })
  }

  onEdit(r) {

  }

  onDelete(r) {

    alert('TODO: Allow deletion of modules while making sure we do not break down stream stacks...')

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
