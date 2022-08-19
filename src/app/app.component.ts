import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { EventService } from './services/event.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name!: string;
  loggedIn: boolean = false;



  constructor(private router: Router, private eventService: EventService) {
  }

  ngOnInit() {
    this.name = JSON.stringify(sessionStorage.getItem('username'));
    this.logged()
  }

  logged(): void {

    if (this.name === "null" || this.name === undefined) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }

  }

  logoutAttempt() {
    this.loggedIn = false;
    this.eventService.loggedOut.next(true);
    timeout(1000);
    this.router.navigate(['']);
    sessionStorage.clear();

  }


}
