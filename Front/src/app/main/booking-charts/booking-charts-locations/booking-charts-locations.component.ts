import { ChangeDetectorRef, Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { DataAdapterUtils, DiscreteBarChartConfiguration, OChartComponent } from 'ontimize-web-ngx-charts';
import { FnTranslator } from 'src/app/utils/fnTranslator';

@Component({
  selector: 'app-booking-charts-locations',
  templateUrl: './booking-charts-locations.component.html',
  styleUrls: ['./booking-charts-locations.component.css']
})
export class BookingChartsLocationsComponent implements OnInit {

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
    this.ontimizeService.query({"reservation_state": 3, "year_": 2023}, ['profits','locations','year_'], 'locationsBooking').subscribe(
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
    let keys = [];
    data.forEach((item: any, index: number) => {
      keys.push(item.locations);

    });
    return keys;
  }
  processValues(data: any, numero: number) {
    let values = [];
    let valor = 'profits';
    
    data.forEach((item: any, index: number) => {
    values.push(item[valor]); 
    });
    console.log(values);
    return values;
  }  
  
  ngOnInit() {
  }


}
