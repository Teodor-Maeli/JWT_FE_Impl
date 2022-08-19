import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  loggedOut = new Subject();

  logOutAttempt() {
    return this.loggedOut.asObservable();
  }

}
