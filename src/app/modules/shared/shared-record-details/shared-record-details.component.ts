import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-record-details',
  templateUrl: './shared-record-details.component.html',
  styleUrls: ['./shared-record-details.component.scss']
})
export class SharedRecordDetailsComponent implements OnInit {

  inOverflow: boolean = true;

  @Input('table') table: any;
  @Input('record') record: any;
  constructor() { }

  ngOnInit(): void {

    console.log('SHARED RECORD DETAILS')
    console.log(this.table)
  }

}
