import { Component, Inject, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;
  name: any;
  role: any;

  nameUser : string = this.authService.getSessionInfo().user;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    @Inject(AuthService) private authService: AuthService,
    public injector: Injector,
    private ontimizeService: OntimizeService
  ) {

    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('users'));
    this.ontimizeService.query({'USER_': this.nameUser}, ['USER_', 'NAME', 'SURNAME1', 'ROLENAME'], 'user').subscribe(
      res => {
        console.log(res.data)
        this.user = res.data.pop()
        this.name = this.user['NAME']
        this.role = this.user['ROLENAME']
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
