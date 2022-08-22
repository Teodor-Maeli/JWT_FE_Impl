import { Component,OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private eventService: EventService) { }

  loggedIn: boolean = true;


  ngOnInit(): void {
    this.ifLogin()
    this.eventService.logOutAttempt().subscribe((event) => {
      setTimeout(() => {
        this.loggedIn = true;
      },500);

    });


  }

  loginForm = this.formBuilder.group({
    username: new FormControl(''),
    password: new FormControl('')

  });


  loggingIn() {
    this.loginService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value);

  }

  ifLogin() {
    if (sessionStorage.getItem('username') !== null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }






}
