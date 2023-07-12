import { Component, OnInit } from '@angular/core';
import { MultiBarHorizontalChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  protected chartParameters1: MultiBarHorizontalChartConfiguration;
  constructor() {
    this.chartParameters1 = new MultiBarHorizontalChartConfiguration();
    this.chartParameters1.margin.left = 200;
    this.chartParameters1.color = ['#E4333C', '#4b4b4b'];
    this.chartParameters1.height = 200;
   }

  ngOnInit() {
  }

}
