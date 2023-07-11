import { ChangeDetectorRef, Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { DiscreteBarChartConfiguration, OChartComponent } from 'ontimize-web-ngx-charts';
import { FnTranslator } from 'src/app/utils/fnTranslator';

@Component({
  selector: 'app-booking-charts-users',
  templateUrl: './booking-charts-users.component.html',
  styleUrls: ['./booking-charts-users.component.css']
})
export class BookingChartsUsersComponent implements OnInit {
  @ViewChild('discretebar1',{static:true}) protected discretebar1: OChartComponent;
  @ViewChild('discretebar2',{static:true}) protected discretebar2: OChartComponent;

  total_not_picked_up: any;
  public chartParameters: DiscreteBarChartConfiguration;
  public chartParameters2: DiscreteBarChartConfiguration;
  protected graphData: Array<Object>;
  protected graphDataU: Array<Object>;
  private auxGraph: Array<Object>;
  protected criteriaValue = 2;


  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef, 
    public injector: Injector
  ) {
    this.graphData = [];
    this.graphDataU = [];
    this.auxGraph = [];
    this.getCount();
  }
  getCount(){
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('bookings'));
    this.ontimizeService.query({"reservation_state": 4, "year_": 2023}, ['id_user','name', 'surname1', 'not_picked_up','year_'], 'usersBooking').subscribe(
      res => {
        if (res && res.data.length && res.code === 0) {
          this.total_not_picked_up = res.data.length;
          this.adaptResult(res.data, this.graphData, 1);
          this.adaptResult(res.data, this.graphDataU, 2);
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );

    this.chartParameters = new DiscreteBarChartConfiguration();
    this.chartParameters.height = 130;
    this.chartParameters.showLegend = false;
    this.chartParameters.y1Axis.showMaxMin = false;
    this.chartParameters.x1Axis.showMaxMin = false;
    this.chartParameters2 = new DiscreteBarChartConfiguration();
    this.chartParameters2.height = 500;
    this.chartParameters2.xAxis = "key";
    this.chartParameters2.yAxis = ["values"];
    this.chartParameters2.color = ['#4649A6', '#006bdb', '#363636', '#1464a5','#41bf78'];
    this.chartParameters2.x1Axis.orient = "bottom";
    this.chartParameters2.x1Axis.rotateLabels = 270;
  }
  adaptResult(data: any, graphData: any[], numero: number) {
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
    // let fntranslator =  new FnTranslator();
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

    // let over = fntranslator.translateOU("over");
    // let under = fntranslator.translateOU("under");
    let lowerCrit = {
      'x': "Under",
      'y': minorValue
    }
    let upperCrit = {
      'x': "Over",
      'y': majorValue
    }

    values.push(lowerCrit);
    values.push(upperCrit);
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


