import {Route, RouterModule} from "@angular/router";
import {BokeComponent} from "./boke.component";
import {NothingComponent} from "./nothing/nothing.component";

export const bokeroutes: Route[] = [
  {
    path: '',
    component: BokeComponent,
    children: [
      {
        path: 'nothing',
        component: NothingComponent
      }
    ]
  }
]

export const BokeRouting = RouterModule.forChild(bokeroutes);
