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
  nombre: any;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    @Inject(AuthService) private authService: AuthService,
    public injector: Injector,
    private ontimizeService: OntimizeService
  ) {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('users'));
    this.ontimizeService.query(undefined, ['USER_', 'NAME', 'SURNAME1', 'ROLENAME'], 'user').subscribe(
      res => {
        console.log(res.data)
        if (res.data && res.data.length) {
          this.user = res.data.filter((e: any) => e['USER_'] === this.authService.getSessionInfo().user)[0];
        }else{
          this.user = undefined;
        }
        console.log(this.user)
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
