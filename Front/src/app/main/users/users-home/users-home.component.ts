import { Component, Inject, Injector, OnInit } from '@angular/core';
import { AuthService, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.css']
})
export class UsersHomeComponent implements OnInit {
  user: any;

  nameUser : string = this.authService.getSessionInfo().user;

  constructor(
    @Inject(AuthService)
    private authService: AuthService,
    public injector: Injector,
    private ontimizeService: OntimizeService) {
      this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('users'));
      this.ontimizeService.query({'USER_': this.nameUser}, ['ROLENAME'], 'user').subscribe(
        res => {
          this.user = res.data.pop();
          if(this.user["ROLENAME"] !== 'security'){
            location.href = "/main/home";
          }
        },
        err => console.log(err)
      );

    }
    static show(){
      console.log('hola');
    }
    show(){
      UsersHomeComponent.show();
    }

  ngOnInit() { }
}
