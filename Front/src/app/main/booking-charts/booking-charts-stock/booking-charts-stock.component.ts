import { ChangeDetectorRef, Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { DataAdapterUtils, DiscreteBarChartConfiguration, OChartComponent } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-booking-charts-stock',
  templateUrl: './booking-charts-stock.component.html',
  styleUrls: ['./booking-charts-stock.component.css']
})
export class BookingChartsStockComponent implements OnInit {

  @ViewChild('discretebar',{static:true}) protected discretebar: OChartComponent;
  
  public chartParameters: DiscreteBarChartConfiguration;
  protected graphData: Array<Object>;
  // protected criteriaValue = 50;
  
  constructor(private ontimizeService: OntimizeService, 
            private cd: ChangeDetectorRef, 
            public injector: Injector) { 

    this.graphData = [];
    this.getSalles();
  }

  getSalles(){
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('bookings'));
    this.ontimizeService.query({"reservation_state": 3, "year_": 2023}, ['product','units','year_', 'name'], 'stockBooking').subscribe(
      res => {
        if (res && res.data.length && res.code === 0) {
          this.adaptResult(res.data);
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
    this.chartParameters = new DiscreteBarChartConfiguration();
    this.chartParameters.xAxis = "key";
    this.chartParameters.yAxis = ["values"];
    this.chartParameters.color = ['#4649A6', '#ffcc33', '#e84b2c', '#006bdb', '#41bf78'];
  }
  adaptResult(data: any) {
    this.graphData = [];
    if (data && data.length) {
      let values = this.processValues(data);
      let keys = this.processKeys(data);
      keys.forEach((item: any, items: number) => {
        const linea: object[] = [{'key': item, 'values': values[items]}]; console.log(linea)
       this.graphData.push(linea[0]); console.log(this.graphData);
      });
      let dataAdapter = DataAdapterUtils.createDataAdapter(this.chartParameters);
      this.discretebar.setDataArray(dataAdapter.adaptResult(this.graphData));
    }
  }
  processKeys(data: any) {
    let keys = [];
    data.forEach((item: any) => {
      let id_name = 'Ref: ' + item.product + ' - ' + item.name;
      keys.push(id_name);
    });
    return keys;
  }
  processValues(data: any) {
    let values = [];
    data.forEach((item: any) => {
    values.push(item.units); 
    });
    return values;
  }  
  
  ngOnInit() {
  }

}
