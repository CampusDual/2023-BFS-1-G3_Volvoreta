import { ChangeDetectorRef, Component, Injector, OnInit } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { DiscreteBarChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.css']
})
export class UsersCardComponent implements OnInit {

  public chartParameters: DiscreteBarChartConfiguration;
  //Cojo el valor desde el ocombo
  //query y envío este parámetro 

  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef, 
    public injector: Injector) { 
      this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('bookings'));
      this.ontimizeService.query({'year_': 2023}, [''], 'yearBooking').subscribe(
        res => {
          if (res && res.data.length && res.code === 0) {
            
          }
        },
        err => console.log(err),
        () => this.cd.detectChanges()
      );

    this.chartParameters = new DiscreteBarChartConfiguration();
    this.chartParameters.height = 200;
    this.chartParameters.color = ['#4b4b4b', '#E4333C', '#47A0E9', '#16b062', '#FF7F0E'];
    this.chartParameters.x1Axis.orient = "bottom";
    this.chartParameters.x1Axis.rotateLabels = 270;
    this.chartParameters.showLegend = false;
    this.chartParameters.showYAxis = false;
    this.chartParameters.showXAxis = false;
    this.chartParameters.showValues = false;
  }

  ngOnInit() {
  }

}
