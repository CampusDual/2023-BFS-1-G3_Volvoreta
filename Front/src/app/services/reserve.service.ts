import {  Injectable } from "@angular/core";
import { Observable, OntimizeService } from "ontimize-web-ngx";
import { OResponse } from "../models/response";
import { Reserve } from "../models/reserve";

@Injectable({ providedIn: 'root' })
export class ReserveService {

  data: Reserve[];

  constructor(private ontimizeService: OntimizeService){
    }
    reserve(reserve: Reserve): Observable<OResponse>{
        this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('bookings'));
        return this.ontimizeService.insert(reserve, 'booking')
    }

    getReserveDate():Observable<OResponse>{
      this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('bookings'));
      return this.ontimizeService.query({}, ['id', 'collection_completed', 'reservation_state', 'units', 'unit_price', 'total_price', 'id_user', 'id_product', 'reservation_date', 'end_date'], 'booking');
  }

}