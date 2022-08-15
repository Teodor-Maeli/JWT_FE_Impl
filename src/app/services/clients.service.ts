import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clients } from '../interfaces/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) {
  }

  private loginUrl: string = 'https://spring-boot-heroku-clients.herokuapp.com/clients';


  

  getClients():Observable<Clients[]>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+(localStorage.getItem('accessToken')),
    });
    return this.http.get<any>(this.loginUrl);
  }
}
