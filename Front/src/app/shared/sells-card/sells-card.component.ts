import { ChangeDetectorRef, Component, Injector, OnInit } from '@angular/core';
import { OTranslateService } from 'ontimize-web-ngx';
import { DiscreteBarChartConfiguration, LineChartConfiguration } from 'ontimize-web-ngx-charts';
import { ReserveService } from 'src/app/services/reserve.service';
import { D3LocaleService } from '../d3-locale/d3Locale.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sells-card',
  templateUrl: './sells-card.component.html',
  styleUrls: ['./sells-card.component.css']
})
export class SellsCardComponent implements OnInit {
  protected chartParameters: DiscreteBarChartConfiguration;

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
    this.configureDiscreteBarChart(d3Locale);
  }
  private configureDiscreteBarChart(locale: any): void {
    this.chartParameters = new DiscreteBarChartConfiguration();
    this.chartParameters.height = 200;
    this.chartParameters.color = ['#4b4b4b', '#E4333C', '#47A0E9', '#16b062', '#FF7F0E'];
    this.chartParameters.showLegend = false;
    this.chartParameters.showYAxis = false;
    this.chartParameters.showXAxis = false;
    this.chartParameters.showValues = false;
    this.chartParameters.xDataType = d => locale.timeFormat('%b')(new Date(d));
    this.chartParameters.yDataType = d => locale.numberFormat("###.##")(d);

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
