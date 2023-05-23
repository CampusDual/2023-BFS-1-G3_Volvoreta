import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { UserRoles } from "../model/userRoles";
import { User } from "../model/user";

@Injectable({providedIn : 'root'})
export class UserRolesService{
    private urlEndpoint: string = 'http://localhost:30030/users/roles';
    private header = new HttpHeaders ({'Content-Type': 'application/json', 'authorization': 'Basic Auth'}); 
    private user : User = new User;

    constructor(private http:HttpClient){}

    userType(): Observable<UserRoles> {
        this.user = JSON.parse(localStorage.getItem('user'));
        let idUser = +this.user.id;
        console.log(this.urlEndpoint.concat('/getuserid'));
        return this.http.post<UserRoles>(this.urlEndpoint.concat('/getuserid'), {headers: this.header, idUser}).pipe(
            tap(
                response => {
                    console.log(response);
                    return  response as UserRoles;
                }
            ),
            map(
                response => {
                    return  response as UserRoles;
                }
            ),
            catchError(
                exception => {
                    console.error(exception.error.message);
                    return throwError(() => exception);
                }
        ));
    }
    // userType(id: number): Observable<UserRole>{
    //     // let userRole: UserRole = {
    //     //     id: null,
    //     //     user_id: id,
    //     //     role_id: null
    //     // };
    //     return this.http.post<UserRole>(this.urlEndpoint.concat('/roles/getuserid'), {headers: this.header, id}).pipe(
    //         tap(
    //             response => {
    //                 console.log('aqui');
    //                 return  response as UserRole;
    //             }
    //         ),
    //         map(
    //             response => {
    //                 console.log('otro2');
    //                 return  response as UserRole;
    //             }
    //         ),
    //         catchError(
    //             exception => {
    //                 console.error(exception.error.message);
    //                 return throwError(() => exception);
    //             }
    //     ));
    // }
}
