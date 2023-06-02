import { Component, OnInit,Inject } from '@angular/core';
import { UsersHomeComponent } from '../users-home/users-home.component';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  pass(user_){
     this.userService.genPass(user_).subscribe()
  }
}
