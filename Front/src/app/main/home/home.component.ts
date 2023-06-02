import { Component, Inject, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, OntimizeService } from 'ontimize-web-ngx';
import { UserService } from '../../services/user.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: any;
  role: any;


  constructor(    
    private router: Router,
    private actRoute: ActivatedRoute,
    @Inject(AuthService) private authService: AuthService,
    public injector: Injector,
    private ontimizeService: OntimizeService,
    private userService: UserService) {
      this.userService.userData().subscribe(
        response=>{
          this.name = response.data[0]['NAME'];
          this.role = response.data[0]['ROLENAME']
        },
        err => console.log(err))
      
    }

  ngOnInit() {
    
   }

   navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }

}



