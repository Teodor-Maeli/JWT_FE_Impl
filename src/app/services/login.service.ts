import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }


  private loginUrl: string = 'http://localhost:8081/login';

  login(username: any, password: any) {
    let headers = new HttpHeaders({
      'username': username,
      'password': password
    });

    return this.http.post<any>(this.loginUrl, null, { observe: 'response', headers: headers}).subscribe((res:any) =>{
      sessionStorage.setItem('username',res.headers.get('username'));
      if(sessionStorage.getItem('username')!==null){
        setTimeout(()=>{
          window.location.reload();
        },500);
      }
    });
  }



}