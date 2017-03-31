import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formValue = JSON.stringify({});
  constructor() {}
  onSubmit( form: NgForm) {
    this.formValue = JSON.stringify(form.value);
  }
  ngOnInit() {
  }
}
