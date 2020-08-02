import { Component, OnInit, OnDestroy, AfterViewInit, AfterContentInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paginated } from '@feathersjs/feathers';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  catalogItems$: Observable<any>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {

    this.catalogItems$ = this.dataService.records$('api/catalog-workflows', {})
      .pipe(
        map(( r: Paginated<any>) => r.data)
      )
  }

}
