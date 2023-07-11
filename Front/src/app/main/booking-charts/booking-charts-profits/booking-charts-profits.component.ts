import { ChangeDetectorRef, Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { DataAdapterUtils, DiscreteBarChartConfiguration, LineChartConfiguration, LinePlusBarFocusChartConfiguration, OChartComponent } from 'ontimize-web-ngx-charts';
import { FnTranslator } from 'src/app/utils/fnTranslator';

@Component({
  selector: 'app-booking-charts-profits',
  templateUrl: './booking-charts-profits.component.html',
  styleUrls: ['./booking-charts-profits.component.css']
})
export class BookingChartsProfitsComponent implements OnInit {
  @ViewChild('discretebar',{static:true}) protected discretebar: OChartComponent;
  
  chartParameters1: LineChartConfiguration;
  public chartParameters: DiscreteBarChartConfiguration;
  protected graphDataP: Array<Object>;
  
  constructor(private ontimizeService: OntimizeService, 
            private cd: ChangeDetectorRef, 
            public injector: Injector) { 
             
              this.chartParameters1 = new LineChartConfiguration();
              this.chartParameters1.isArea = [true];
              this.chartParameters1.interactive = false;
              this.chartParameters1.showLegend = false;
              this.chartParameters1.useInteractiveGuideline = false;
    this.graphDataP = [];
    this.getProfits();
  }
  getProfits(){
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('bookings'));
    this.ontimizeService.query({}, ['profits','month_','n_month','year_'], 'sellBooking').subscribe(
      res => {
        if (res && res.data.length && res.code === 0) {
          this.adaptResult(res.data);
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
    this.chartParameters = new DiscreteBarChartConfiguration();
    this.chartParameters.height = 130;
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
        const linea: object[] = [{'key': item, 'values': values[items]}]; console.log(linea)
        this.graphDataP.push(linea[0]);
      });
      let dataAdapter = DataAdapterUtils.createDataAdapter(this.chartParameters);
      this.discretebar.setDataArray(dataAdapter.adaptResult(this.graphDataP));
    }
  }
  processKeys(data: any) {
    let translateMonth = new FnTranslator();
    let keys = [];
    data.forEach((item: any) => {
      keys.push(translateMonth.translateMonth(item.n_month));
    });
    return keys;
  }
  processValues(data: any) {
    let values = [];
    data.forEach((item: any) => {
      values.push(item.profits);
    });
    return values;
  }
  ngOnInit() { }

}
