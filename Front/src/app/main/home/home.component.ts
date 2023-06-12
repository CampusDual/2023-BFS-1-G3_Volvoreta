import { Component, Inject, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, OntimizeService } from 'ontimize-web-ngx';
import { User } from 'src/app/models/user';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { FnTranslator } from 'src/app/utils/fnTranslator';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  wellcome: string;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    public injector: Injector,
    private userService: UserService
  ) {
    this.userService.getUser().subscribe(res=>
      {
            let user: User = res.data.pop();
            let fnTranslate = new FnTranslator();
            this.wellcome = fnTranslate.translateRolename(user);
            this.userService.setWellcome(this.wellcome);
          },
          err => console.log(err)
      )
   }

  ngOnInit() {
    // nothing to do

  }

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }

}