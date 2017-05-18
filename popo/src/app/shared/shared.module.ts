import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { CAlertComponent } from './c-alert/c-alert.component';
import {CookieService} from "./cookie.service";
import { UpfileComponent } from './upfile/upfile.component';
@NgModule({
  imports: [CommonModule],
  declarations: [CAlertComponent, UpfileComponent],
  exports: [CAlertComponent, UpfileComponent],
  providers: [CookieService]
})

export class SharedModule {}
