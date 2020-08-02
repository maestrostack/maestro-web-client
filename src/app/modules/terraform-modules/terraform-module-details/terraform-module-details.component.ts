import { Component, OnInit, Input } from '@angular/core';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paginated } from '@feathersjs/feathers';
import { Router } from '@angular/router';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-terraform-module-details',
  templateUrl: './terraform-module-details.component.html',
  styleUrls: ['./terraform-module-details.component.scss']
})
export class TerraformModuleDetailsComponent implements OnInit {

  @Input('record') record: any;

  variables$: Observable<any>;

  addRecord: boolean = false;

  newRecord = {
    label: '',
    name: '',
    description: '',
    _module: null

  }

  detail: any;

  saveModuleSuccess: boolean = false;
  saveVariableSuccess: boolean = false;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {

    this.variables$ = this.dataService.records$('api/terraform/module-variables', {
      _module: this.record._id
    })
    .pipe(
      map(( r: Paginated<any>) => r.data)
    )

    console.log(this.record);
  }

  onModuleDetailOpen(event) {
    console.log(event);
  }

  saveModule(detail) {
    this.dataService.updateRecord('api/terraform/modules', detail._id, detail)
      .then( () => {
        this.saveModuleSuccess = true;
        setTimeout( () => {
          this.saveModuleSuccess = false;
          this.detail = null;
        }, 3000);
      })
      .catch( error => {

      });
  }

  saveRecord(detail) {

    this.dataService.updateRecord('api/terraform/module-variables', detail._id, detail)
      .then( () => {
        this.saveVariableSuccess = true;

        setTimeout( () => {
          this.saveVariableSuccess = false;

          this.detail = null;
        }, 3000)
      })

  }

  createRecord() {
    this.newRecord._module = this.record._id;

    this.dataService.createRecord('api/terraform/module-variables', this.newRecord)
      .then( () => {
        this.addRecord = false;
      })
  }

  onAdd() {

    this.addRecord = true;

  }

  onEdit(r) {


  }

  onDelete(r) {


    this.dataService.deleteRecord('api/terraform/module-variables', r._id, r);


  }

}
