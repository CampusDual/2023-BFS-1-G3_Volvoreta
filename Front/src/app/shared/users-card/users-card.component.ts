import { Component, OnInit } from '@angular/core';
import { DiscreteBarChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.css']
})
export class UsersCardComponent implements OnInit {

  public chartParameters: DiscreteBarChartConfiguration;
  protected graphData: Array<Object>;

  constructor() { 
    this.graphData = [];

    this.chartParameters = new DiscreteBarChartConfiguration();
    this.chartParameters.showLegend = false;
    this.chartParameters.color = ['#E4333C', '#000000'];
    this.chartParameters.y1Axis.showMaxMin = false;
    this.chartParameters.x1Axis.showMaxMin = false;
    this.chartParameters.height = 200;
  }

  getCount(){
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('bookings'));
    this.ontimizeService.query({"reservation_state": 4, "year_": 2023}, ['id_user','name', 'surname1', 'not_picked_up','year_'], 'usersBooking').subscribe(
      res => {
        if (res && res.data.length && res.code === 0) {
          this.adaptResult(res.data, 1);
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
  }
  adaptResult(data: any, numero: number) {
    if (data && data.length) {
      if(numero === 1){
        let values = this.processValues(data, this.auxGraph);
        // chart data
        this.graphData = [
          {
            'key': 'Discrete serie',
            'values': values
          }
        ];
      }else if(numero === 2 && this.auxGraph.length > 0){
        let values = this.processKeyValues(this.auxGraph);
        this.graphDataU = [
          {
            'key': 'Users',
            'values': values
          }
        ];
      }
      
    }
  }
  processValues(data: any, graphData: any[]) {
    let values = [];
    let minorValue = 0;
    let majorValue = 0;
    data.forEach((item: any, index: number) => {
      if (item['not_picked_up'] >= this.criteriaValue){
        majorValue++;
        graphData.push(item);
      }else{
        minorValue++;
      }
    });
    let lowerCrit = {
      'x': "Under",
      'y': minorValue
    }
    let upperCrit = {
      'x': "Over",
      'y': majorValue
    }

    values.push(upperCrit);
    values.push(lowerCrit);
    return values;
  }
  processKeyValues(graphData: any[]) {
    let values = [];
    graphData.forEach((item: any, index: number) => {
      let user = {
        'x': item.id_user + '; ' + (item.name).charAt(0) + '. ' + item.surname1,
        'y': item.not_picked_up
      }
      values.push(user);
    });
    return values;
  }

  ngOnInit() {
  }

}
