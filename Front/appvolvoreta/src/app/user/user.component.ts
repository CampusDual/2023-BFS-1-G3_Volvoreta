import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user : User = new User;
  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.load();
  }
  load() : void{
    this.activatedRoute.params.subscribe(params => {
      let id =params['id'];
      if(id){
        let searchUser = new User;
        searchUser.id = id;
        this.userService.getUser(searchUser).subscribe(resultUser => this.user = resultUser);
      }
    });
  }
}
