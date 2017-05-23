import { Component, OnInit } from '@angular/core';
import {CookieService} from "../../shared/cookie.service";
declare var jquery: any;

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {

  constructor(
    private cookieService: CookieService
  ) { }
  user:string;
  ngOnInit() {
    this.user = this.getUser();
  }
  getUser(){
    return this.cookieService.getCookie('li')
  }
}
