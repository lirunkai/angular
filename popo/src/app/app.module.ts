import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRouting, AppRoutingProvidors} from './app.routes';
import {HomeComponent} from './home/home.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  providers: [AppRoutingProvidors],
  bootstrap: [AppComponent]
})
export class AppModule { }
