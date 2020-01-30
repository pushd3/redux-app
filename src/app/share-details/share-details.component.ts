import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";

@Component({
  selector: 'app-share-details',
  templateUrl: './share-details.component.html',
  styleUrls: ['./share-details.component.css']
})
export class ShareDetailsComponent implements OnInit {
  users: any = this.store.select(state => state.users);
 
  constructor(private store: Store<any>) {}


  ngOnInit() {
  }

}
