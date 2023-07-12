import { Component, OnInit } from '@angular/core';
import { DonutChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-locations-card',
  templateUrl: './locations-card.component.html',
  styleUrls: ['./locations-card.component.css']
})
export class LocationsCardComponent implements OnInit {

  protected chartParameters1: DonutChartConfiguration;
  constructor() {
    this.chartParameters1 = new DonutChartConfiguration();
    this.chartParameters1.showLabels = false;
    this.chartParameters1.donutRatio = 0.5;
    this.chartParameters1.legendPosition = "bottom";
    this.chartParameters1.labelType = "value";
    this.chartParameters1.height = 200;
   }

  ngOnInit() {
  }

}
