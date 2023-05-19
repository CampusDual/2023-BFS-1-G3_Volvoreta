import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { Usuario } from "../model/usuario";

@Injectable({
    providedIn: "root",
})

export class UserService {

    private urlUser = 'http://localhost:30030/users'
    private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' })

    constructor(private http: HttpClient, private router: Router) { }

    getUsers(): Observable<Usuario[]> { return this.http.get<Usuario[]>(this.urlUser.concat("/getAll"), { headers: this.httpHeaders }) }

    // getUser(): Observable<User> { return this.http.post<User>(this.urlUser.concat("/get"), { headers: this.httpHeaders, body: {
    //     id: 1
    // } }) }
    
    login(user: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(this.urlUser.concat("/login"), user);
      }

}