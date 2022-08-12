import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name!: string;
  loggedIn: boolean = false;



  constructor(private router: Router) {


  }

  ngOnInit() {
    this.name = JSON.stringify(localStorage.getItem('username'));
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
    this.router.navigate(['']);
    setTimeout(() => { window.location.reload(); }, 200)
    localStorage.clear();

  }


}
