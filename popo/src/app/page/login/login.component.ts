import { Component, OnInit } from '@angular/core';
import {CookieService} from "../../shared/cookie.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private cookieService: CookieService
  ) { }
  ngOnInit() {
    this.setUser();
  }
  setUser(){
    this.cookieService.setCookie('li', 'runkai' ,1)
  }
}
