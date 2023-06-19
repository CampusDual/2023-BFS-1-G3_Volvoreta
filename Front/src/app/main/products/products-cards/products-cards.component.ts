import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-cards',
  templateUrl: './products-cards.component.html',
  styleUrls: ['./products-cards.component.css']
})
export class ProductsCardsComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) { }

  ngAfterContentChecked() {
    this.cd.detectChanges();
  }

  ngOnInit() {
  }

}
