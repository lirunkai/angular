import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormComponent} from "./form/form.component";
import {RouterModule} from "@angular/router";
import {routes} from "./form.routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ReactformComponent} from "./reactform/reactform.component";
import {ValidatemobileDirective} from "./form/form.directive";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormComponent, ReactformComponent,ValidatemobileDirective]
})
export class FormModule { }
