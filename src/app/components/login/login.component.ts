import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  loggedIn: boolean = true;


  ngOnInit(): void {
    this.ifLogin()

  }

  loginForm = this.formBuilder.group({
    username: new FormControl(''),
    password: new FormControl('')

  });


  sendRequest() {
    this.loginService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value);

    let interval = setInterval(() => {
      let token = localStorage.getItem('accessToken');
      if (token !== null) {
        this.ifLogin();
        window.location.reload()
        clearInterval(interval);
      }
    }, 500)
  }

  ifLogin() {
    if (localStorage.getItem('username') !== null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }






}
