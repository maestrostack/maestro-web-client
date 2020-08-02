import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paginated } from '@feathersjs/feathers';
import { Router } from '@angular/router';
import { DataService } from '../../core/services/data.service';



@Component({
  selector: 'app-pwsh',
  templateUrl: './pwsh.component.html',
  styleUrls: ['./pwsh.component.scss']
})
export class PwshComponent implements OnInit {

  modules$: Observable<any>;

  service: string = 'api/terraform/modules';

  selected = [];

  addRecord: boolean = false;
  newRecord = {
    name: '',
    description: '',
    repo: ''
  };


  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {

    // this.modules$ = this.dataService.records$('api/terraform/modules', {})
    //   .pipe(
    //     map(( r: Paginated<any>) => r.data)
    //   )
  }

  createRecord() {
    this.dataService.createRecord('api/terraform/modules', this.newRecord)
      .then( data => {
        // this.addRecord = false;
      })
      .catch(
        error => {

        }
      )
  }

  onAdd() {

    this.addRecord = true;

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
