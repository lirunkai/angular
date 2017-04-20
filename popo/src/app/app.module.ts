import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRouting, AppRoutingProvidors} from './app.routes';
import {HomeComponent} from './home/home.component';
import {BokeModule} from "./page/boke/boke.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpModule,
    BokeModule
  ],
  providers: [AppRoutingProvidors],
  bootstrap: [AppComponent]
})
export class AppModule { }
