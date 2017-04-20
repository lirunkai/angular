import {Routes} from "@angular/router";
import {BokeComponent} from "./boke.component";
import {AngularComponent} from "./pages/angular/angular.component";
export const bokeroutes: Routes = [
  {
    path: 'boke',
    component: BokeComponent,
    children: [
      {
        path: 'angular',
        component: AngularComponent
      },
      {
        path: '',
        redirectTo: 'angular',
        pathMatch: 'full'
      }
    ]
  }
]
