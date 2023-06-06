import { Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService, Observable } from 'ontimize-web-ngx';
import { PasswordInput } from '../main/users/users-detail/users-detail.component';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserService {
    
    private passwordBD: BehaviorSubject<PasswordInput> = new BehaviorSubject<PasswordInput>({password:""});
    private id = this.authService.getSessionInfo().id;
    private urlEndpoint: string = 'http://localhost:33333/users';
    private httpHeader = new HttpHeaders({'Content-Type': 'application/json','Authorization':"Bearer " + this.id})
    
    constructor(private http: HttpClient, @Inject(AuthService) private authService: AuthService) { }

    getPasswordBD():Observable<PasswordInput>{
        return this.passwordBD.asObservable();
    }
    setPasswordBD(pass: PasswordInput) {
        this.passwordBD.next(pass);
    }
    clearPasswordDB(){
        this.passwordBD.next({password: ""});
    }
    
    genPass(user_: string) {
        return this.http.post(this.urlEndpoint.concat('/genPass'), user_,{headers:this.httpHeader})
    }
    
}