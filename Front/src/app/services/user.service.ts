import { Component, Inject, Injector, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { tap, map, catchError } from "rxjs/operators";
import { formatDate, registerLocaleData } from "@angular/common";
import localerES from "@angular/common/locales/es";
import { AuthService, OntimizeService } from 'ontimize-web-ngx';


@Injectable({ providedIn: 'root' })
export class UserService {
    id = this.authService.getSessionInfo().id
    private urlEndpoint: string = 'http://localhost:33333/users';
    private httpHeader = new HttpHeaders({'Content-Type': 'application/json','Authorization':"Bearer " + this.id})
    constructor(private http: HttpClient, @Inject(AuthService) private authService: AuthService) { }

    genPass(user_: string) {
        return this.http.post(this.urlEndpoint.concat('/genPass'), user_,{headers:this.httpHeader})
    }
    
}