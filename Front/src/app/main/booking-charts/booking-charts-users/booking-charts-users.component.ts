import { ChangeDetectorRef, Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { DataAdapterUtils, DiscreteBarChartConfiguration, OChartComponent } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-booking-charts-users',
  templateUrl: './booking-charts-users.component.html',
  styleUrls: ['./booking-charts-users.component.css']
})
export class BookingChartsUsersComponent implements OnInit {

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
    this.ontimizeService.query({"reservation_state": 4, "year_": 2023}, ['id_user','name','year_', 'surname1', 'not_picked_up'], 'usersBooking').subscribe(
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
      let id_name = 'Ref: ' + item.id_user + ' - ' + item.name + ' ' + item.surname1;
      keys.push(id_name);
    });
    return keys;
  }
  processValues(data: any) {
    let values = [];
    data.forEach((item: any) => {
    values.push(item.not_picked_up); 
    });
    return values;
  }  
  
  ngOnInit() {
  }

}
