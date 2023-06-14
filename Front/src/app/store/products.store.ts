import { BehaviorSubject, Observable } from "rxjs";
import { Products } from "../models/products";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ProductsStore {
    private productDB: BehaviorSubject<Products> = new BehaviorSubject<Products>(new Products());

    getProductDB():Observable<Products>{
        return this.productDB.asObservable();
    }
    setProductDB(product: Products) {
        this.productDB.next(product);
    }
    clearPRoductDB(){
        this.productDB.next(new Products());
    }
}