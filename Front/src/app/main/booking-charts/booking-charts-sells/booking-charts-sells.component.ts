import { ChangeDetectorRef, Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OTranslateService, OntimizeService } from 'ontimize-web-ngx';
import { DataAdapterUtils, DiscreteBarChartConfiguration, LineChartConfiguration, OChartComponent } from 'ontimize-web-ngx-charts';
import { D3LocaleService } from 'src/app/shared/d3-locale/d3Locale.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-charts-sells',
  templateUrl: './booking-charts-sells.component.html',
  styleUrls: ['./booking-charts-sells.component.css']
})
export class BookingChartsSellsComponent implements OnInit {
  @ViewChild('lineChart',{static:true}) protected lineChart: OChartComponent;
  @ViewChild('discretebar',{static:true}) protected discretebar: OChartComponent;
  
  protected chartParameters1: LineChartConfiguration;
  public chartParameters: DiscreteBarChartConfiguration;
  protected graphDataS: Array<Object>;
  protected labelX: string;
  protected labelY: string;
  
  constructor(private ontimizeService: OntimizeService, 
      private cd: ChangeDetectorRef, 
      public injector: Injector,
      private translateService: OTranslateService, 
      private d3LocaleService:D3LocaleService, 
      private router: Router) { 
    this.translateService.onLanguageChanged.subscribe(() => this.reloadComponent());
    if(JSON.parse(localStorage.getItem("com.ontimize.web.volvoreta"))['lang'] == "es"){
      this.labelX = "Meses";
      this.labelY = "Unidades";
    } else{
      this.labelX = "Month";
      this.labelY = "Units";
    }

    this.graphDataS = [];
    this.getSalles();
  }

  getSalles(){
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('bookings'));
    this.ontimizeService.query({'year_': 2023}, ['total_sales','month_','n_month','year_', 'timeDateD'], 'sellBooking').subscribe(
      res => {
        if (res && res.data.length && res.code === 0) {
          this.adaptResult(res.data, this.graphDataS);
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
    
  }
  adaptResult(data: any, graphData: any[]) {
    graphData = [];
    if (data && data.length) {
      let values = this.processValues(data);
      let keys = this.processKeys(data);
      keys.forEach((item: any, items: number) => {
        const line: object[] = [{'key': item, 'values': values[items]}];
        graphData.push(line[0]);
      });
      let dataAdapter = DataAdapterUtils.createDataAdapter(this.chartParameters);
      this.discretebar.setDataArray(dataAdapter.adaptResult(graphData));
    }
  }
  processKeys(data: any) {
    let keys = [];
    data.forEach((item: any) => {
      keys.push(item.timeDateD);
    });
    return keys;
  }
  processValues(data: any) {
    let values = [];
    data.forEach((item: any) => {
      values.push(item.total_sales);
    });
    return values;
  }  
  private configureLanguage(){
    const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this.configureDiscreteBarChart(d3Locale);
    this.configureLineChart(d3Locale);
  }
  private configureDiscreteBarChart(locale: any): void {
    this.chartParameters = new DiscreteBarChartConfiguration();
    this.chartParameters.height = 130;
    this.chartParameters.xAxis = "key";
    this.chartParameters.yAxis = ["values"];
    this.chartParameters.color = ['#4b4b4b', '#E4333C', '#47A0E9', '#16b062', '#FF7F0E'];
    this.chartParameters.y1Axis.axisLabel = this.labelY;
    // this.chartParameters1.x1Axis.axisLabel = this.labelX;
    this.chartParameters.xDataType = d => locale.timeFormat('%b')(new Date(d));
    this.chartParameters.yDataType = d => locale.numberFormat("###.#")(d); 
  }
  private configureLineChart(locale: any): void{
    this.chartParameters1 = new LineChartConfiguration();
    this.chartParameters1.isArea = [true];
    this.chartParameters1.interactive = false;
    this.chartParameters1.showLegend = false;
    this.chartParameters1.useInteractiveGuideline = false;
    this.chartParameters1.color = ['#E4333C', '#47A0E9', '#16b062', '#FF7F0E','#4b4b4b'];
    this.chartParameters1.x1Axis.axisLabel = this.labelX;
    this.chartParameters1.y1Axis.axisLabel = this.labelY;    
    // this.chartParameters1.xDataType = d => locale.timeFormat('%b')(new Date(d));
    this.chartParameters1.yDataType = d => locale.numberFormat("###.#")(d);
  }
  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }
  ngOnInit() {
    this.configureLanguage();
    let dataAdapter = DataAdapterUtils.createDataAdapter(this.chartParameters);
    this.discretebar.setDataArray(dataAdapter.adaptResult(this.graphDataS));
  }

}
