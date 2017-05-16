import { Component, OnInit } from '@angular/core';
import {cookie} from "../../shared/help";
import {CookieService} from "../../shared/cookie.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.removeUser();
  }
  removeUser(){
    this.cookieService.removeCookie('li');
  }
}
