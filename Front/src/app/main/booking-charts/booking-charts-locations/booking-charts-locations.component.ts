import { ChangeDetectorRef, Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { DataAdapterUtils, DiscreteBarChartConfiguration, DonutChartConfiguration, OChartComponent, PieChartConfiguration } from 'ontimize-web-ngx-charts';
import { ReserveService } from 'src/app/services/reserve.service';
import { FnTranslator } from 'src/app/utils/fnTranslator';

@Component({
  selector: 'app-booking-charts-locations',
  templateUrl: './booking-charts-locations.component.html',
  styleUrls: ['./booking-charts-locations.component.css']
})
export class BookingChartsLocationsComponent implements OnInit {

  @ViewChild('discretebar',{static:true}) protected discretebar: OChartComponent;
  
  protected chartParameters1: DonutChartConfiguration;
  // public chartParameters: DiscreteBarChartConfiguration;
  protected graphData: Array<Object>;
  
  constructor(
      private cd: ChangeDetectorRef, 
      public injector: Injector, 
      private setYearConsultation: ReserveService
    ) { 
    
    this.setYearConsultation.setYearConsultation(2023).subscribe(
      err => console.log(err),
      () => this.cd.detectChanges()
    ); 
    this.chartParameters1 = new DonutChartConfiguration();
    this.chartParameters1.color = ['#4b4b4b', '#E4333C', '#47A0E9', '#16b062', '#FF7F0E'];
    this.chartParameters1.showLabels = true;
    this.chartParameters1.donutRatio = 0.5;
    this.chartParameters1.legendPosition = "bottom";
    this.chartParameters1.labelType = "value";
  }

  ngOnInit() {
  }


}
