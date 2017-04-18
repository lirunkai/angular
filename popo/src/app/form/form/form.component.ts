import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  user:any;
  active:boolean = true;
  errorMsg: string;
  nameErrorMsg: string;
  ischeck:any;
  constructor() {
    this.user = {
      name: '张三',
      mobile: 15582889147,
      address: {
        city: '北京', street: '朝阳望京'
      }
    };
  }
  check(){
    console.log(1);
  }
  create(){
    this.user={
      address: {}
    };
    this.active = false;
    setTimeout(() => {
      this.active = true;
    },0);
    return false;
  }

  loginForm (form: NgForm) {
    if ( form.invalid ) {
      this.errorMsg = 'valid error ';
      if ( form.controls['name']) {
        this.nameErrorMsg = 'name error' + JSON.stringify(form.controls['name'].errors)
      } else {
        this.nameErrorMsg = null;
      }
    } else {
      this.errorMsg = null;
      this.nameErrorMsg = null;
    }
  }

  reset (form: NgForm) {
    form.reset();
    return false;
  }
  ngOnInit() {
  }
}
