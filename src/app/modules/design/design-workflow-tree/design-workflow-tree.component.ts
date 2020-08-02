import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-design-workflow-tree',
  templateUrl: './design-workflow-tree.component.html',
  styleUrls: ['./design-workflow-tree.component.scss']
})
export class DesignWorkflowTreeComponent implements OnInit {

  @Input() treelist;

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
  }

}
