import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from "@ngrx/store";
import {fromUsersActions} from  '../store/action'
import {User} from '../shared/user.interface';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {

  customForm: FormGroup;
  users: any = this.store.select(state => state.users);
 
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.customForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
 
    this.store.dispatch(fromUsersActions.LoadUsers());
  }
 

  get name() { return this.customForm.get('name'); }

  onSubmit() {
    console.log("sbumit");
  }
}
