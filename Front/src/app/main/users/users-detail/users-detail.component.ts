import { Component, OnInit } from '@angular/core';
import { UsersHomeComponent } from '../users-home/users-home.component';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show(){
    UsersHomeComponent.show();
  }
}
