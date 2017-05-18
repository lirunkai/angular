import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRouting, AppRoutingProvidors} from './app.routes';
import {HomeComponent} from './home/home.component';
import {SharedModule} from "./shared/shared.module";
import { LoginComponent } from './page/login/login.component';
import { LogoutComponent } from './page/logout/logout.component';
import { CenterComponent } from './page/center/center.component';
import { EditorComponent } from './page/editor/editor.component';
import {QuillEditorModule} from 'ngx-quill-editor';
import { QuillEditorComponent } from './page/editor/quill-editor/quill-editor.component';
import { QiniuComponent } from './page/qiniu/qiniu.component';
import {NotificationsService} from "angular2-notifications/dist";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    CenterComponent,
    EditorComponent,
    QuillEditorComponent,
    QiniuComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpModule,
    SharedModule,
    QuillEditorModule
  ],
  providers: [AppRoutingProvidors, NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
