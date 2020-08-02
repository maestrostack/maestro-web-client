import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-record-related-table',
  templateUrl: './shared-record-related-table.component.html',
  styleUrls: ['./shared-record-related-table.component.scss']
})
export class SharedRecordRelatedTableComponent implements OnInit {

  @Input('table') table: any;

  constructor() { }

  ngOnInit(): void {
  }

}
