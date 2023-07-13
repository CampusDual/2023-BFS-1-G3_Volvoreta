import { ChangeDetectorRef, Component, Injector, OnInit } from '@angular/core';
import { DonutChartConfiguration } from 'ontimize-web-ngx-charts';
import { ReserveService } from 'src/app/services/reserve.service';

@Component({
  selector: 'app-locations-card',
  templateUrl: './locations-card.component.html',
  styleUrls: ['./locations-card.component.css']
})
export class LocationsCardComponent implements OnInit {

  protected chartParameters1: DonutChartConfiguration;
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
    this.chartParameters1.showLabels = false;
    this.chartParameters1.donutRatio = 0.5;
    this.chartParameters1.legendPosition = "bottom";
    this.chartParameters1.labelType = "value";
    this.chartParameters1.height = 178;
    this.chartParameters1.showTooltip = true;
    this.chartParameters1.showLeyend = false;
   }
  ngOnInit() {
  }

}
