import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.scss']
})
export class ReactformComponent implements OnInit {

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ])
  password = new FormControl('', [
    Validators.required
  ])
  loginForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password
  })
  constructor(private builder: FormBuilder) { }

  login(){
    console.log(this.loginForm.value)
  }
  ngOnInit() {
  }

}
