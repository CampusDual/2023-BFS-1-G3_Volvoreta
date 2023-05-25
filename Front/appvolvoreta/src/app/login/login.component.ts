import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { UserRolesService } from '../services/userRoles.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private nif      : string;
  private password : string;
  // private user     : User = new User;
  
  constructor(private userService : UserService, private userRolesService : UserRolesService, private router: Router) { 
  }

  ngOnInit() {
  }
  login(){
    // this.nif = document.getElementById('nif').value;
    // this.password = document.getElementById('password').value;
    // console.log(this.nif)
    
    const inputNif = document.getElementById('nif') as HTMLInputElement | null;
    const inputPass = document.getElementById('password') as HTMLInputElement | null;

    if (inputNif != null) {
      this.nif = inputNif.value;
    }
    if (inputPass != null) {
      this.password = inputPass.value;
    }

    this.userService.login(this.nif, this.password).subscribe((data => {
      if(data){
        localStorage.setItem('user', JSON.stringify(data));
        alert('Login correcto');
        this.userRolesService.userType().subscribe((data1 => {
          console.log('role' +  data1.id);
          if(data1.roleId == 2){
            this.router.navigate(['/users']);
          }
        }));
        // if(data.nif == "62551833K"){
        //   this.router.navigate(['/users']);
        // }
      } else {
        alert('Login incorrecto');
      }
    }));
    // this.userRolesService.userType().subscribe((data => {
    //   console.log(data);
    // }));
    // if(this.user){
    //   this.userService.userType(this.user.id).subscribe((data => console.log(data)));
    //   localStorage.setItem('user', JSON.stringify(this.user));
    //   alert('Login correcto');
    // } else {
    //   alert('Login incorrecto');
    // }
  }
}
