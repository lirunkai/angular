import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {HomeComponent} from './home/home.component';
import {FormPageModule} from "./pages/form/formpage.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{useHash: true}),
    FormsModule,
    HttpModule,
    FormPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
