import {  Injectable } from "@angular/core";
import { Observable, OntimizeService } from "ontimize-web-ngx";
import { OResponse } from "../models/response";
import { Reserve } from "../models/reserve";

@Injectable({ providedIn: 'root' })
export class ReserveService {

  data: Reserve[];

  constructor(private ontimizeService: OntimizeService){ }
  reserve(reserve: Reserve): Observable<OResponse>{
      this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('bookings'));
      return this.ontimizeService.insert(reserve, 'booking');
  }

  getReserveDate(id: number):Observable<OResponse>{
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('bookings'));
    return this.ontimizeService.query({'id': id}, ['end_date'], 'booking');
  }
  setYearConsultation(year_: number):Observable<OResponse>{
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('bookings'));
    return this.ontimizeService.query({'year_': year_}, [''], 'yearBooking');
  }
}