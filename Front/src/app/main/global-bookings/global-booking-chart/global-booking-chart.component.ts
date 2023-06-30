import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DataAdapterUtils, DiscreteBarChartConfiguration, OChartComponent } from 'ontimize-web-ngx-charts';
import { D3LocaleService } from 'src/app/shared/d3-locale/d3Locale.service';
import { ReserveService } from 'src/app/services/reserve.service';
import { Reserve } from 'src/app/models/reserve';

@Component({
  selector: 'app-global-booking-chart',
  templateUrl: './global-booking-chart.component.html',
  styleUrls: ['./global-booking-chart.component.css']
})
export class GlobalBookingChartComponent implements OnInit {
  @ViewChild('discretebar', { static: true }) protected discretebar: OChartComponent;
  public chartParameters: DiscreteBarChartConfiguration;

  dataStats: any;

  noTranslateData = [
    { "date": 1672574400000, "value": 1 },
    { "date": 1675252800000, "value": 5 },
    { "date": 1677672000000, "value": 3 },
    { "date": 1680350400000, "value": 8 },
    { "date": 1682942400000, "value": 9 },
    { "date": 1685620800000, "value": 10 },
    { "date": 1688212800000, "value": 5 },
    { "date": 1690891200000, "value": 3 },
    { "date": 1693569600000, "value": 1 },
    { "date": 1696161600000, "value": 2 },
    { "date": 1698840000000, "value": 1 },
    { "date": 1701432000000, "value": 5 }
  ];

  constructor(private reserveService: ReserveService, @Inject(D3LocaleService) private d3LocaleService: D3LocaleService) {
  }

  ngOnInit() {

    console.log(new Date(1685620800000))

    this.reserveService.getReserveDate().subscribe(({ data }) => {
      this.dataStats = data

      console.log(new Date(data[0]["collection_completed"]))

      this.configCharData()
    });

  }

  private sumUnitByMonth() {

  }

  private configCharData() {
    console.log(this.dataStats)
    const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this._configureDiscreteBarChart(d3Locale);
    let dataAdapter = DataAdapterUtils.createDataAdapter(this.chartParameters);
    this.discretebar.setDataArray(dataAdapter.adaptResult(this.dataStats));
  }

  private _configureDiscreteBarChart(locale: any): void {

    let colors: string[] = ['#1464a5', '#4649A6', '#41bf78', '#363636', '#006bdb']
    this.chartParameters = new DiscreteBarChartConfiguration();
    this.chartParameters.xAxis = "collection_completed";
    this.chartParameters.yAxis = ["units"];
    this.chartParameters.color = colors;
    this.chartParameters.xDataType = d => locale.timeFormat('%b')(new Date(d))
  };
}