import { Component, Inject, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, OntimizeService } from 'ontimize-web-ngx';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  wellcome: string;
  nameUser : string = this.authService.getSessionInfo().user;
  
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    @Inject(AuthService) private authService: AuthService,
    public injector: Injector,
    private ontimizeService: OntimizeService,
    private userService: UserService,
  ) {

    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('users'));
    this.ontimizeService.query({'USER_': this.nameUser}, ['USER_', 'NAME', 'SURNAME1', 'ROLENAME'], 'user').subscribe(
      res => {
        let user: any = res.data.pop();
        //console.log(JSON.parse(localStorage.getItem("com.ontimize.web.volvoreta"))['lang'])
        if(JSON.parse(localStorage.getItem("com.ontimize.web.volvoreta"))['lang'] == "es"){
          let role: string;
          if(user['ROLENAME'] == 'security'){
            role = 'seguridad';
          } else if(user['ROLENAME'] == 'maintenance'){
            role = 'mantenimiento';
          } else if(user['ROLENAME'] == 'user'){
            role = 'usuario';
          }
          this.wellcome = "Bienvenid@, " + user['NAME'] + " " + user['SURNAME1'] + ";  acceso: " + role; 
          this.userService.setWellcome(this.wellcome);
        
        } else {
          this.wellcome = "Welcome, " + user['NAME'] + " " + user['SURNAME1'] + "; access type: " + user['ROLENAME'];
          this.userService.setWellcome(this.wellcome);
        }
      },
      err => console.log(err)

    );

   }

  ngOnInit() {
    // nothing to do

  }

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }

}