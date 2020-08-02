import { Component, OnInit, OnDestroy, AfterViewInit, AfterContentInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paginated } from '@feathersjs/feathers';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/services/data.service';


@Component({
  selector: 'app-catalog-browse',
  templateUrl: './catalog-browse.component.html',
  styleUrls: ['./catalog-browse.component.scss']
})
export class CatalogBrowseComponent implements OnInit {

  catalogItems$: Observable<any>;

  loading: boolean = true;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {

    this.catalogItems$ = this.dataService.records$('api/catalog-workflows', {})
      .pipe(
        map(( r: Paginated<any>) => r.data)
      )

    this.catalogItems$.subscribe( () => {
      this.loading = false;
    })
  }

}
