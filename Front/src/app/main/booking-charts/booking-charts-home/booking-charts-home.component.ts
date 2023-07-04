import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { DataAdapterUtils, DiscreteBarChartConfiguration, OChartComponent, PieChartConfiguration } from 'ontimize-web-ngx-charts';
import { D3LocaleService} from 'src/app/shared/d3-locale/d3Locale.service';

@Component({
  selector: 'app-booking-charts-home',
  templateUrl: './booking-charts-home.component.html',
  styleUrls: ['./booking-charts-home.component.css']
})
export class BookingChartsHomeComponent implements OnInit {
  @ViewChild('discretebar',{static:true}) protected discretebar: OChartComponent;
  
  public chartParameters: DiscreteBarChartConfiguration;
  protected graphData: Array<Object>;
  // protected criteriaValue = 50;
  
  constructor(private ontimizeService: OntimizeService, private cd: ChangeDetectorRef, private d3LocaleService: D3LocaleService) { 
    this.graphData = [];
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('bookings'));
    this.ontimizeService.query({"reservation_state": 3, "year_": 2023}, ['total_sales','month_','year_'], 'sellBooking').subscribe(
      res => {
        if (res && res.data.length && res.code === 0) {
          this.adaptResult(res.data);
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
    //const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this.chartParameters = new DiscreteBarChartConfiguration();
    // this.chartParameters.height = 130;
    // this.chartParameters.showLegend = false;
    // this.chartParameters.y1Axis.showMaxMin = false;
    // this.chartParameters.x1Axis.showMaxMin = false;
    this.chartParameters.xAxis = "key";
    this.chartParameters.yAxis = ["values"];
    this.chartParameters.color = ['#1464a5','#4649A6','#41bf78','#363636','#006bdb'];
    
  }

  adaptResult(data: any) {
    if (data && data.length) {
      let values = this.processValues(data);
      let keys = this.processKeys(data);
      // chart data
      keys.forEach((item: any, items: number) => {
        // values.forEach(() => {
          const linea: object[] = [{'key': item, 'values': values[items]}]; console.log(linea)
          this.graphData.push(linea[0]); console.log(this.graphData);
        // });
      });
      let dataAdapter = DataAdapterUtils.createDataAdapter(this.chartParameters);
      this.discretebar.setDataArray(dataAdapter.adaptResult(this.graphData));
    }
  }
  processKeys(data: any) {
    let keys = [];
    data.forEach((item: any, index: number) => {
      //keys.push(item['month_']);
      switch (item['month_']){
        case 1:
          keys.push("Ene");
          break;
        case 2:
          keys.push("Feb");
          break;
        case 3:
          keys.push("Mar");
          break;
        case 4:
          keys.push("Abr");
          break;
        case 5:
          keys.push("May");
          break;
        case 6:
          keys.push("Jun");
          break;
        case 7:
          keys.push("Jul");
          break;
        case 8:
          keys.push("Ago");
          break;
        case 9:
          keys.push("Sep");
          break;
        case 10:
          keys.push("Oct");
          break;
        case 11:
          keys.push("Nov");
          break;
        case 12:
          keys.push("Dic");
          break;
      }

    });
    return keys;
  }
  processValues(data: any) {
    let values = [];
    
    data.forEach((item: any, index: number) => {
      values.push(item['total_sales']);
    });
    return values;
  }
  ngOnInit() { }
  
}
