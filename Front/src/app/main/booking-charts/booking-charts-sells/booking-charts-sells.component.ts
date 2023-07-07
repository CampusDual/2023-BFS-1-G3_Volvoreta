import { ChangeDetectorRef, Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { DataAdapterUtils, DiscreteBarChartConfiguration, OChartComponent } from 'ontimize-web-ngx-charts';
import { FnTranslator } from 'src/app/utils/fnTranslator';

@Component({
  selector: 'app-booking-charts-sells',
  templateUrl: './booking-charts-sells.component.html',
  styleUrls: ['./booking-charts-sells.component.css']
})
export class BookingChartsSellsComponent implements OnInit {
  @ViewChild('discretebar',{static:true}) protected discretebar: OChartComponent;
  
  public chartParameters: DiscreteBarChartConfiguration;
  protected graphDataS: Array<Object>;
  // protected criteriaValue = 50;
  
  constructor(private ontimizeService: OntimizeService, 
            private cd: ChangeDetectorRef, 
            public injector: Injector) { 

    this.graphDataS = [];
    this.getSalles();
  }

  getSalles(){
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('bookings'));
    this.ontimizeService.query({"reservation_state": 3, "year_": 2023}, ['total_sales','month_','year_'], 'sellBooking').subscribe(
      res => {
        if (res && res.data.length && res.code === 0) {
          this.adaptResult(res.data, this.graphDataS, 1);
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
    this.chartParameters = new DiscreteBarChartConfiguration();
    this.chartParameters.xAxis = "key";
    this.chartParameters.yAxis = ["values"];
    this.chartParameters.color = ['#363636', '#41bf78', '#1464a5', '#4649A6', '#006bdb'];
  }
  adaptResult(data: any, graphData: any[], numero: number) {
    graphData = [];
    if (data && data.length) {
      let values = this.processValues(data, numero);
      let keys = this.processKeys(data);
      keys.forEach((item: any, items: number) => {
        const linea: object[] = [{'key': item, 'values': values[items]}]; console.log(linea)
        graphData.push(linea[0]); console.log(graphData);
      });
      let dataAdapter = DataAdapterUtils.createDataAdapter(this.chartParameters);
      this.discretebar.setDataArray(dataAdapter.adaptResult(graphData));
    }
  }
  processKeys(data: any) {
    let translateMonth = new FnTranslator();

    let keys = [];
    data.forEach((item: any, index: number) => {
      switch (item['month_']){
        case 1:
          keys.push(translateMonth.translateMonth(1));
          break;
        case 2:
          keys.push(translateMonth.translateMonth(2));
          break;
        case 3:
          keys.push(translateMonth.translateMonth(3));
          break;
        case 4:
          keys.push(translateMonth.translateMonth(4));
          break;
        case 5:
          keys.push(translateMonth.translateMonth(5));
          break;
        case 6:
          keys.push(translateMonth.translateMonth(6));
          break;
        case 7:
          keys.push(translateMonth.translateMonth(7));
          break;
        case 8:
          keys.push(translateMonth.translateMonth(8));
          break;
        case 9:
          keys.push(translateMonth.translateMonth(9));
          break;
        case 10:
          keys.push(translateMonth.translateMonth(10));
          break;
        case 11:
          keys.push(translateMonth.translateMonth(11));
          break;
        case 12:
          keys.push(translateMonth.translateMonth(12));
          break;
      }

    });
    return keys;
  }
  processValues(data: any, numero: number) {
    let values = [];
    let valor = 'total_sales';
    
    data.forEach((item: any, index: number) => {
      values.push(item[valor]);
    });
    return values;
  }  ngOnInit() {
  }

}
