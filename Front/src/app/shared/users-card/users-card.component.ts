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
  protected graphData: Array<Object>;
  protected criteriaValue = 2;

  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef, 
    public injector: Injector) { 
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
        if (res && res.data.length && res.code === 0) { console.log(res.data)
          this.adaptResult(res.data);
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
  }
  adaptResult(data: any) {console.log(data)
    if (data && data.length) {
      let values = this.processValues(data);
      // chart data
      this.graphData = [
        {
          'key': 'Discrete serie',
          'values': values
        }
      ];console.log(this.graphData)
    }
  }
  processValues(data: any) {console.log(data)
    let values = [];
    let minorValue = 0;
    let majorValue = 0;
    data.forEach((item: any) => {
      if (item['not_picked_up'] >= this.criteriaValue){
        majorValue++;
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
    values.push(lowerCrit);console.log(values)
    return values;
  }

  ngOnInit() {
  }

}
