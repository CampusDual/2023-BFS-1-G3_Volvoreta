import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Observable } from 'rxjs';
import { UsersDialogPasswordComponent } from '../users-dialog-password/users-dialog-password.component';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  
  constructor(
    private userService: UserService, 
    public dialog: MatDialog, 
    private router: Router,
    private actRoute: ActivatedRoute
    ) { }

  ngOnInit() {
  }
  /**
   * Método para cambiar o establecer la contraseña del usuario seleccionado
   * 
   * @param user_ Usuario al que se le debe establecer o cambiar la contraseña
   */
  pass(user_: string){
    this.userService.genPass(user_).subscribe(res=> {
      let response = res as PasswordInput;
      let  msg: Observable<PasswordInput> = this.userService.getPasswordBD();
      let message: string; 
      this.userService.setPasswordBD(response);
      msg.subscribe(res => message = res.password);
      this.dialog.open(UsersDialogPasswordComponent, {data: {user: user_, pass: message}});
    });
  }
  turnback(){
    this.router.navigate(['../../', 'users'], { relativeTo: this.actRoute });
  }
 }
export interface PasswordInput{
  password: string;
}
