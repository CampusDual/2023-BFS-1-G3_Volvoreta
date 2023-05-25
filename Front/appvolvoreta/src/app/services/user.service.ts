import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { User } from "../model/user";

@Injectable({providedIn : 'root'})
export class UserService{
    private urlEndpoint: string = 'http://localhost:30030/users';
    private header = new HttpHeaders ({'Content-Type': 'application/json', 'authorization': 'Access-Control-Allow-Origin'}); 
    
    constructor(private http:HttpClient, private router: Router){}
    getUsers(): Observable<User[]>{
        return this.http.get(this.urlEndpoint.concat('/getAll')).pipe(
            tap(
                response => {
                    let users = response as User[];
                    users.forEach(user => console.log(user.name));
                }
            ), 
            map(
                response => {
                    let users = response as User[];
                    return users.map(user => {
                        return user;
                    })
                }
            ));
    }
    getUser(user : User) : Observable<User> {
        return this.http.post(this.urlEndpoint.concat('/get'), user, {headers : this.header}).pipe(
            tap(
                response => {
                    let user = response as User;
                    console.log(user);
                }
            ),
            map(
                response => {
                    let user = response as User;
                    return user;
                }
            ),
            catchError(
                exception => {
                    console.error(exception.error.message);
                    return throwError(() => exception);
                }
        ));
    }
    login(nif: string, password: string): Observable<User> {
        // return this.http.post<User>(this.urlEndpoint.concat('/login'), {headers: this.header, body: {nif, password}}).pipe(
        return this.http.post<User>(this.urlEndpoint.concat('/login'), {headers: this.header, nif, password}).pipe(
            tap(
                response => {
                    return  response as User;
                }
            ),
            map(
                response => {
                    return  response as User;
                }
            ),
            catchError(
                exception => {
                    console.error(exception.error.message);
                    return throwError(() => exception);
                }
        ));
    }
}
