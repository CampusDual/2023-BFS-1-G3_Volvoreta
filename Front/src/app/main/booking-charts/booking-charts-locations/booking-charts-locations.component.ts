import { ChangeDetectorRef, Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { DataAdapterUtils, DiscreteBarChartConfiguration, OChartComponent, PieChartConfiguration } from 'ontimize-web-ngx-charts';
import { FnTranslator } from 'src/app/utils/fnTranslator';

@Component({
  selector: 'app-booking-charts-locations',
  templateUrl: './booking-charts-locations.component.html',
  styleUrls: ['./booking-charts-locations.component.css']
})
export class BookingChartsLocationsComponent implements OnInit {

  @ViewChild('discretebar',{static:true}) protected discretebar: OChartComponent;
  
  chartParameters1: PieChartConfiguration;
  public chartParameters: DiscreteBarChartConfiguration;
  protected graphData: Array<Object>;
  // protected criteriaValue = 50;
  
  constructor(private ontimizeService: OntimizeService, 
            private cd: ChangeDetectorRef, 
            public injector: Injector) { 
              this.chartParameters1 = new PieChartConfiguration();
              // this.chartParameters1.cornerRadius = 20;
              this.chartParameters1.legendPosition = "bottom";
              this.chartParameters1.labelType = "value";
    this.graphData = [];
    // this.getSales();
  }

  // getSales(){
  //   this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('bookings'));
  //   this.ontimizeService.query({"reservation_state": 3, "year_": 2023}, ['total_sales','name_location'], 'locationsBooking').subscribe(
  //     res => {
  //       if (res && res.data.length && res.code === 0) {
  //         // this.adaptResult(res.data);
  //         this.graphData = res.data;
  //         console.log(res);
  //       }
  //     },
  //     err => console.log(err),
  //     () => this.cd.detectChanges()
  //   );
  //   this.chartParameters = new DiscreteBarChartConfiguration();
  //   this.chartParameters.xAxis = "key";
  //   this.chartParameters.yAxis = ["values"];
  //   this.chartParameters.color = ['#4649A6', '#ffcc33', '#e84b2c', '#006bdb', '#41bf78'];
  // }
  // adaptResult(data: any) {
  //   this.graphData = [];
  //   if (data && data.length) {
  //     let values = this.processValues(data);
  //     let keys = this.processKeys(data);
  //     keys.forEach((item: any, items: number) => {
  //       const linea: object[] = [{'key': item, 'values': values[items]}];
  //      this.graphData.push(linea[0]);
  //     });
      
  //     let dataAdapter = DataAdapterUtils.createDataAdapter(this.chartParameters);
  //     this.discretebar.setDataArray(dataAdapter.adaptResult(this.graphData));
  //   }
  // }
  // processKeys(data: any) {
  //   let keys = [];
  //   data.forEach((item: any) => {
  //     keys.push(item.name_location);
  //   });
  //   return keys;
  // }
  // processValues(data: any) {
  //   let values = [];
  //   data.forEach((item: any) => {
  //   values.push(item.total_sales); 
  //   });
  //   return values;
  // } 
  ngOnInit() {
  }


}
