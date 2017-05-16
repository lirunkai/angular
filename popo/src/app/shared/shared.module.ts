import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { CAlertComponent } from './c-alert/c-alert.component';
import {CookieService} from "./cookie.service";
@NgModule({
  imports: [CommonModule],
  declarations: [CAlertComponent],
  exports: [CAlertComponent],
  providers: [CookieService]
})

export class SharedModule {}
