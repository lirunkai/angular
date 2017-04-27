import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { CAlertComponent } from './c-alert/c-alert.component';
@NgModule({
  imports: [CommonModule],
  declarations: [CAlertComponent],
  exports: [CAlertComponent],
  providers: []
})

export class SharedModule {}
