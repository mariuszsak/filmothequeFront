import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthLoginInfo} from './login-info';
import {Observable} from 'rxjs';
import {JwtResponse} from './jwt-response';
import {AuthRegisterInfo} from './register-info';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private loginUrl = 'http://localhost:8080/login';
    private signupUrl = 'http://localhost:8080/signup';

    constructor(private http: HttpClient) {
    }

    attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
        return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
    }

    signUp(info: AuthRegisterInfo): Observable<string> {
        return this.http.post<string>(this.signupUrl, info, httpOptions);
    }
}
