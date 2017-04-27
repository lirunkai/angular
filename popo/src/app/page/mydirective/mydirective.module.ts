import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import {MydirectiveRouting} from "./mydirective.routes";
import {SharedModule} from "../../shared/shared.module";
import {MydirectiveComponent} from "./mydirective.component";

@NgModule({
  imports: [
    CommonModule,
    MydirectiveRouting,
    SharedModule
  ],
  declarations: [AlertComponent, MydirectiveComponent]
})
export class MydirectiveModule { }
