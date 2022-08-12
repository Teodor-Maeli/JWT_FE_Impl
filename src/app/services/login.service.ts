import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private loginUrl: string = 'http://localhost:8080/login';

  login(username: any, password: any) {
    let headers = new HttpHeaders({
      'username': username,
      'password': password
    });

     return this.http.post<any>(this.loginUrl,null,{observe:'response',headers: headers}).subscribe((response:any) => {
       localStorage.setItem("accessToken",response.headers.get('AccessToken'))
       localStorage.setItem("refreshToken",response.headers.get('refreshToken'))
       localStorage.setItem('username',username)
    });
  }

}