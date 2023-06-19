import {  Injectable } from "@angular/core";
import { Observable, OntimizeService } from "ontimize-web-ngx";
import { OResponse } from "../models/response";
import { Reserve } from "../models/reserve";

@Injectable({ providedIn: 'root' })
export class ReserveService {

  constructor(private ontimizeService: OntimizeService){
    }
    reserve(reserve: Reserve): Observable<OResponse>{
        this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('bookings'));
        return this.ontimizeService.insert(reserve, 'booking')
    }

}