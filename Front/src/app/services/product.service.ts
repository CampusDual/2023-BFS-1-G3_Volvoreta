import { HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { AuthService, Observable, OntimizeService } from "ontimize-web-ngx";
import { OResponse } from "../models/response";

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(@Inject(AuthService) private authService: AuthService, private ontimizeService: OntimizeService){
        this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('products'));
    }

     getAll(): Observable<OResponse> {
        this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('products'));
        return this.ontimizeService.query({},['id', 'name', 'stock', 'price', 'state', 'body', 'photo'], 'product')
      
    }

    getById(id: number): Observable<OResponse>{
        this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('products'));
        return this.ontimizeService.query({'id': id},['id', 'name', 'stock', 'price', 'state', 'body', 'photo'], 'product')
    }

}