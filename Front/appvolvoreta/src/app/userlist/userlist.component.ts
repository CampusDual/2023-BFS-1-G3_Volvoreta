import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UserService } from '../services/usuario.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  users: Usuario[];
  displayedColumns: string[] = ['id', 'nif', 'name'];

  // displayedColumns: string[] = ['id', 'nif', 'name', 'surname1', 'surname2', 'login', 'password'];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(userList => this.users = userList);
  }

}
