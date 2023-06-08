import { HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { AuthService, Observable, OntimizeService } from "ontimize-web-ngx";
import { OResponse } from "../models/response";

@Injectable({ providedIn: 'root' })
export class ProductService {

    constructor(@Inject(AuthService) private authService: AuthService,     private ontimizeService: OntimizeService){
        this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('products'));
    }

     getAll(): Observable<OResponse> {
         return this.ontimizeService.query({},['ID', 'NAME', 'STOCK', 'PRICE', 'STATE'], 'product')
      
    }

}