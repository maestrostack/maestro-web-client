import { Component, OnInit, OnDestroy, AfterViewInit, AfterContentInit, Input, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paginated } from '@feathersjs/feathers';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { AuthService } from '../../core/services/auth.service';


@Component({
  selector: 'app-stack-details',
  templateUrl: './stack-details.component.html',
  styleUrls: ['./stack-details.component.scss']
})
export class StackDetailsComponent implements OnInit {

  item$: Observable<any>;
  item: any;
  loading: boolean = true;
  nodes$: Observable<any>;
  stackId: any;

  details$: Observable<any>;

  displayNodeDetails: boolean = false;
  displayDetailsLoading: boolean = true;
  currentDetailsNode = null;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  
  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( p => {
      this.stackId = p.stack;
      this.loadStackNodes();
      this.item$ = this.dataService.record$('api/stacks', p.stack);
    });

    this.item$.subscribe( i => {
      this.item = i;
    })
  }

  loadStackNodes() {
    this.nodes$ = this.dataService.records$('api/stack-resources', {
      _stack: this.stackId,
      $sort: {
        order: 1
      }
    })
    .pipe(
      map(( r: Paginated<any>) => r.data)
    )

    // this.nodes$.subscribe( i => {
    //   console.log(i)
    //   this.loading = false;
    // })
  }


  showNodeDetails(n) {
    this.displayNodeDetails = true;
    this.details$ = this.dataService.record$('api/stack-resources', n._id)
      
    setTimeout( () => {
      this.displayDetailsLoading = false;
    }, 2000)
  }

}
