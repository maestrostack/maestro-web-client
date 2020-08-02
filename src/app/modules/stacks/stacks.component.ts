import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paginated } from '@feathersjs/feathers';
import { Router } from '@angular/router';
import { DataService } from '../core/services/data.service';
import { AuthService } from '../core/services/auth.service';



@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.scss']
})
export class StacksComponent implements OnInit {

  stacks$: Observable<any>;

  loading: boolean = true;

  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {

    setTimeout( () => {
      this.loading = false;
    }, 2000)
  }

}
