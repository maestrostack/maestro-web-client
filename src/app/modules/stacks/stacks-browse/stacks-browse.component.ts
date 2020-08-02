import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paginated } from '@feathersjs/feathers';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { DataService } from '../../core/services/data.service';


@Component({
  selector: 'app-stacks-browse',
  templateUrl: './stacks-browse.component.html',
  styleUrls: ['./stacks-browse.component.scss']
})
export class StacksBrowseComponent implements OnInit {

  stacks$: Observable<any>;

  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.stacks$ = this.dataService.records$('api/stacks', {
      $sort: {
        name: 1
      }
    })
      .pipe(
        map(( r: Paginated<any>) => r.data)
      )

    this.loading = false;

  }

}
