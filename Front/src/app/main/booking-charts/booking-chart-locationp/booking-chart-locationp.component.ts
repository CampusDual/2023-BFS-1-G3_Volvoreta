import { ChangeDetectorRef, Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { DataAdapterUtils, DiscreteBarChartConfiguration, OChartComponent, PieChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-booking-chart-locationp',
  templateUrl: './booking-chart-locationp.component.html',
  styleUrls: ['./booking-chart-locationp.component.css']
})
export class BookingChartLocationpComponent implements OnInit {

  @ViewChild('discretebar',{static:true}) protected discretebar: OChartComponent;
  
  chartParameters1: PieChartConfiguration;
  public chartParameters: DiscreteBarChartConfiguration;
  protected graphData: Array<Object>;
  // protected criteriaValue = 50;
  
  constructor(private ontimizeService: OntimizeService, 
            private cd: ChangeDetectorRef, 
            public injector: Injector) { 
    this.chartParameters1 = new PieChartConfiguration();
    this.chartParameters1.color = ['#4b4b4b', '#E4333C', '#47A0E9', '#16b062', '#FF7F0E'];
    this.chartParameters1.legendPosition = "bottom";
    this.chartParameters1.labelType = "value";
  }
 
  ngOnInit() {
  }


}
