import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UserService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nif:string;
  password:string;
  UserService: any;

  constructor(private userService: UserService ) { }

  ngOnInit() {
  }

  login(){
    let user = new Usuario();
    user = {...user, nif: this.nif, password: this.password}
    
    this.userService.login(user).subscribe((data) => {
    console.log(data);
  });
  }
}

