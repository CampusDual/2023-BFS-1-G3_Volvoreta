import { ChangeDetectorRef, Component, OnInit, ViewChild, Injector } from '@angular/core';
import { DiscreteBarChartConfiguration, OChartComponent, PieChartConfiguration } from 'ontimize-web-ngx-charts';
import { ReserveService } from 'src/app/services/reserve.service';
import { D3LocaleService } from 'src/app/shared/d3-locale/d3Locale.service';
import { Router } from '@angular/router';
import { OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-booking-chart-locationp',
  templateUrl: './booking-chart-locationp.component.html',
  styleUrls: ['./booking-chart-locationp.component.css']
})
export class BookingChartLocationpComponent implements OnInit {

  @ViewChild('discretebar',{static:true}) protected discretebar: OChartComponent;
  
  chartParameters1: PieChartConfiguration;
  public chartParameters: DiscreteBarChartConfiguration;
  protected graphData: Array<Object>;
  // protected criteriaValue = 50;
  
  constructor(
      private cd: ChangeDetectorRef, 
      public injector: Injector, 
      private setYearConsultation: ReserveService, 
      private translateService: OTranslateService,
      private d3LocaleService:D3LocaleService, 
      private router: Router
    ) { 
    this.translateService.onLanguageChanged.subscribe(() => this.reloadComponent());
    this.setYearConsultation.setYearConsultation(2023).subscribe(
      err => console.log(err),
      () => this.cd.detectChanges()
    );   
    
  }
  private configureLanguage(){
    const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this.configurePieChart(d3Locale);
  }
  private configurePieChart(locale: any): void {
    this.chartParameters1 = new PieChartConfiguration();
    this.chartParameters1.color = ['#4b4b4b', '#e4333c', '#47a0e9', '#16b062', '#ff7f0e'];
    this.chartParameters1.legendPosition = "bottom";
    this.chartParameters1.labelType = "value";
    this.chartParameters1.yDataType = d => locale.numberFormat("###.00#")(d);
  }
  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }
  ngOnInit() {
    this.configureLanguage();
  }


}
