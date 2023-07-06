import { ChangeDetectorRef, Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { DataAdapterUtils, DiscreteBarChartConfiguration, OChartComponent, PieChartConfiguration } from 'ontimize-web-ngx-charts';
import { D3LocaleService} from 'src/app/shared/d3-locale/d3Locale.service';
import { FnTranslator } from 'src/app/utils/fnTranslator';

@Component({
  selector: 'app-booking-charts-profits-home',
  templateUrl: './booking-charts-profits-home.component.html',
  styleUrls: ['./booking-charts-profits-home.component.css']
})
export class BookingChartsProfitsHomeComponent implements OnInit {
  @ViewChild('discretebar1',{static:true}) protected discretebar1: OChartComponent;
  @ViewChild('discretebar2',{static:true}) protected discretebar2: OChartComponent;
  
  public chartParameters: DiscreteBarChartConfiguration;
  public chartParameters2: DiscreteBarChartConfiguration;
  protected graphDataS: Array<Object>;
  protected graphDataP: Array<Object>;
  // protected criteriaValue = 50;
  
  constructor(private ontimizeService: OntimizeService, 
            private cd: ChangeDetectorRef, 
            private d3LocaleService: D3LocaleService, 
            public injector: Injector) { 

    this.graphDataS = [];
    this.graphDataP = [];
    this.getSalles();
    this.getProfits();
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
    //const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this.chartParameters = new DiscreteBarChartConfiguration();
    // this.chartParameters.height = 130;
    // this.chartParameters.showLegend = false;
    // this.chartParameters.y1Axis.showMaxMin = false;
    // this.chartParameters.x1Axis.showMaxMin = false;
    this.chartParameters.xAxis = "key";
    this.chartParameters.yAxis = ["values"];
    //this.chartParameters.color = ['#1464a5','#4649A6','#41bf78','#363636','#006bdb'];
  }
  getProfits(){
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('bookings'));
    this.ontimizeService.query({"reservation_state": 3, "year_": 2023}, ['profits','month_','year_'], 'sellBooking').subscribe(
      res => {
        if (res && res.data.length && res.code === 0) {
          this.adaptResult(res.data, this.graphDataP, 2);
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
    this.chartParameters2 = new DiscreteBarChartConfiguration();
    this.chartParameters2.xAxis = "key";
    this.chartParameters2.yAxis = ["values"];
    this.chartParameters2.color = ['#1464a5','#4649A6','#41bf78','#363636','#006bdb'];
  }

  adaptResult(data: any, graphData: any[], numero: number) {
    graphData = [];
    if (data && data.length) {
      let values = this.processValues(data, numero);
      let keys = this.processKeys(data);
      // chart data
      keys.forEach((item: any, items: number) => {
        // values.forEach(() => {
          const linea: object[] = [{'key': item, 'values': values[items]}]; console.log(linea)
          graphData.push(linea[0]); console.log(graphData);
        // });
      });
      let dataAdapter = DataAdapterUtils.createDataAdapter(this.chartParameters);
      if(numero === 1){
        this.discretebar1.setDataArray(dataAdapter.adaptResult(graphData));
      } else if(numero === 2){
        this.discretebar2.setDataArray(dataAdapter.adaptResult(graphData));
      }
     
    }
  }
  processKeys(data: any) {
    let translateMonth = new FnTranslator();

    let keys = [];
    data.forEach((item: any, index: number) => {
      //keys.push(item['month_']);
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
    let valor = "";
    if(numero === 1){
      valor = 'total_sales';
    } else if(numero === 2){
      valor = 'profits';
    }
    data.forEach((item: any, index: number) => {
      values.push(item[valor]);
    });
    return values;
  }
  ngOnInit() { }
  
}
