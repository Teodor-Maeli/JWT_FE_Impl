import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { REFRESH_TOKEN } from '../interfaces/authTokens';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {

  }


  private loginUrl: string = 'http://localhost:8081/login';

  login(username: any, password: any) {
    let headers = new HttpHeaders({
      'username': username,
      'password': password
    });

    return this.http.post<any>(this.loginUrl, null, { observe: 'response', headers: headers }).subscribe((response: any) => {

      sessionStorage.setItem("ACCESS_TOKEN", response.headers.get('ACCESS_TOKEN'))
      sessionStorage.setItem("REFRESH_TOKEN", response.headers.get('REFRESH_TOKEN'))
      sessionStorage.setItem('username', username)
    });
  }



}