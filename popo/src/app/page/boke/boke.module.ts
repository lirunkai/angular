import {NgModule} from "@angular/core";
import {AngularComponent} from "./pages/angular/angular.component";
import {RouterModule} from "@angular/router";
import {bokeroutes} from "./boke.routes";
import {BokeComponent} from "./boke.component";
@NgModule({
  imports: [RouterModule.forChild(bokeroutes)],
  declarations: [BokeComponent, AngularComponent]
})

export class BokeModule {}
