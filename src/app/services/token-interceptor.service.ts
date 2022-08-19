import { HttpBackend, HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { __await } from 'tslib';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  access_token: any = sessionStorage.getItem('ACCESS_TOKEN');
  refresh_token: any = sessionStorage.getItem('REFRESH_TOKEN');
  expiration_time: any = this.jwtHelper.getTokenExpirationDate(this.access_token);
  time_now: any = new Date();

  private httpClient: HttpClient;
  baseUrl: string = 'http://localhost:8081/clients/refresh'

  constructor(private jwtHelper: JwtHelperService, private handler: HttpBackend,private eventService: EventService) {
    this.httpClient = new HttpClient(handler);
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log()

    if (this.access_token) {

      req = req.clone({
        setHeaders: {
          ACCESS_TOKEN: this.access_token
        }
      });
      if (this.expiration_time - this.time_now < 5 * 1000) {

        let headers = new HttpHeaders({
          'refresh_token': this.refresh_token
        });

        this.httpClient.post<any>(this.baseUrl, null, { observe: 'response', headers: headers }).subscribe((response: any) => {
          sessionStorage.setItem('ACCESS_TOKEN', response.headers.get('ACCESS_TOKEN'));
          sessionStorage.setItem('REFRESH_TOKEN', response.headers.get('REFRESH_TOKEN'));
          this.access_token = sessionStorage.getItem('ACCESS_TOKEN')
          this.refresh_token = sessionStorage.getItem('REFRESH_TOKEN')
          console.log('inside')
          window.location.reload();
        })
      }
    }
    return next.handle(req)
  }



}

