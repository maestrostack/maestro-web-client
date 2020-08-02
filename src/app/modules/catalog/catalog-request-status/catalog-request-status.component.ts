import { Component, OnInit, OnDestroy, AfterViewInit, AfterContentInit, Input, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paginated } from '@feathersjs/feathers';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-catalog-request-status',
  templateUrl: './catalog-request-status.component.html',
  styleUrls: ['./catalog-request-status.component.scss']
})
export class CatalogRequestStatusComponent implements OnInit {

  item$: Observable<any>;
  item: any;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  
  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( p => {
      console.log(p)
      this.item$ = this.dataService.record$('api/stacks', p.stack);
    })

    this.item$.subscribe( i => {
      this.item = i;
    })
  }

}
