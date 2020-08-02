import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Paginated } from '@feathersjs/feathers';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { AuthService } from '../../core/services/auth.service';
// import { TreelistService } from '../../design/treelist.service';
// import { NodeService } from '../../design/node.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-request-details-page',
  templateUrl: './request-details-page.component.html',
  styleUrls: ['./request-details-page.component.scss']
})
export class RequestDetailsPageComponent implements OnInit {

  request: any;
  nodes = [];

  blocks$: Observable<any>;

  treeLists = [];
  currentlySelectedTree;
  currentlySelectedTreeId;


  loading: boolean = true;

  constructor(
    // private treelistsvc: TreelistService,
    // private nodeService: NodeService,
    private dataService: DataService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // this.treelistsvc.showNodeDetails.subscribe( t => {
    //   console.log(t);
    //   this.showNodeConfig = t;
    // });

    // this.treelistsvc.currentNodeDetails.subscribe( d => {
    //   this.currentNode = d;
    // })

		this.blocks$ = this.dataService.records$('blocks', {})
			.pipe(
				map(( r: Paginated<any>) => r.data)
      )
      
    this.activatedRoute.params.subscribe( p => {
      console.log(p)
      this.request = p.id;
    })

    // this.loading = false;



    // for (const c of data.children) {
    //   const alist = [];
    //   alist.push(c);
    //   this.treeLists.push([alist]);
    // }

    // this.treelistsvc.setCurrentlySelectedTree(this.treeLists[0]);
    // this.currentlySelectedTree = treelistsvc.currentlySelectedTree;
    // this.currentlySelectedTreeId = this.currentlySelectedTree[0][0].id;


    this.dataService.findRecords('request-activities', {
      _stack: this.request
    })
    .then( res => {

      console.log(res)

      let nodeCount = 10;
      res.data.forEach( n => {
        // this.nodeService.addDynamicNode(n);
        // console.log(n)
        n.id = n._id

        this.nodes.push(n)



      
      })
      
    })
    .then( () => {
      // this.loading = false;
      // this.treelistsvc.treeToggler$.subscribe((status) => {
      //   this.currentlySelectedTree = this.treelistsvc.currentlySelectedTree;
      //   this.currentlySelectedTreeId = this.treelistsvc.currentlySelectedTreeId;
      //   this.treelistsvc.clearHiddenChildren();
      // });
  
      // // // // for (const c of this.nodes) {
      // // // //   console.log(c)
      // // // //   const alist = [];
      // // // //   alist.push(c);
      // // // //   this.treeLists.push([alist]);

      // // // //   console.log(this.treeLists)
      // // // // }

      // this.loading = false;
  
      // // // console.log(this.nodes);
      // this.treeLists.push([this.nodes]);
      // this.treelistsvc.setCurrentlySelectedTree(this.treeLists[0]);
      // this.currentlySelectedTree = this.currentlySelectedTree;
      // this.currentlySelectedTreeId = this.currentlySelectedTree[0][0].id;
    })


    


  }

}
