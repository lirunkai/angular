import {NgModule} from "@angular/core";
import { NothingComponent } from './nothing/nothing.component';
import {BokeRouting} from "./boke.routes";
import {BokeComponent} from "./boke.component";

@NgModule({
  imports: [BokeRouting],
  declarations: [NothingComponent, BokeComponent],
  providers: []
})

export class BokeModule {}
