import { Component, OnInit } from '@angular/core';
import { LineChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-profits-card',
  templateUrl: './profits-card.component.html',
  styleUrls: ['./profits-card.component.css']
})
export class ProfitsCardComponent implements OnInit {

  protected chartParameters1: LineChartConfiguration;
  
  constructor() { 
    this.chartParameters1 = new LineChartConfiguration();
    this.chartParameters1.isArea = [true];
    this.chartParameters1.color = ['#4b4b4b', '#E4333C', '#47A0E9', '#16b062', '#FF7F0E'];
    this.chartParameters1.interactive = false;
    this.chartParameters1.showLegend = false;
    this.chartParameters1.useInteractiveGuideline = false;
    this.chartParameters1.height = 200;
    this.chartParameters1.showXAxis = false;
    this.chartParameters1.showYAxis = false;
  }

  ngOnInit() {
  }

}
