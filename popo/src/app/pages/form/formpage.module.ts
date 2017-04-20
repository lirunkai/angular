import {FormRouting} from "./formpage.routes";
import {NgModule} from "@angular/core";
import {FormComponent} from "./form/form.component";
import {FormPageComponent} from "./formpage.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
@NgModule({
  imports: [FormRouting, FormsModule, CommonModule],
  declarations: [FormComponent, FormPageComponent],
  providers: []
})

export class FormPageModule {}
