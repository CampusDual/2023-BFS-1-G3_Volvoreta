import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  wellcome: string;

  constructor(private userService: UserService){ 
    userService.getUserBD().subscribe(data => this.wellcome = data);
    console.log(this.wellcome);
  }
}
