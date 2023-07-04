import {  Injectable } from "@angular/core";
import {  Observable, OntimizeService } from "ontimize-web-ngx";
import { OResponse } from "../models/response";

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(private ontimizeService: OntimizeService){
    }

     getAll(): Observable<OResponse> {
        this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('products'));
        return this.ontimizeService.query({},['id', 'name', 'stock', 'price', 'state', 'body', 'photo'], 'product')
    }

    getById(id: number): Observable<OResponse>{
        this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('products'));
        return this.ontimizeService.query({'id': id},['id', 'name', 'stock', 'istock', 'price', 'state_name', 'body', 'photo', 'name_location'], 'product')
    }

    updateStock(id: number, newStock: number): Observable<OResponse> {
      let active = (newStock === 0) ? false : true;
      this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('products'));
      return this.ontimizeService.update({'id': id},{'stock': newStock, 'active': active}, 'product');
    }
    updateActive(id: number, active: boolean): Observable<OResponse> { console.log("Entro update", id, active)
      this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('products'));
      return this.ontimizeService.update({'id': id},{'active': active}, 'product');
    }

}