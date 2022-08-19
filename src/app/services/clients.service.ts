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

  private loginUrl: string = 'http://localhost:8081/clients';


  

  getClients():Observable<Clients[]>{
    return this.http.get<any>(this.loginUrl);
  }
}
