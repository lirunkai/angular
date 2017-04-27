import {RouterModule, Routes} from "@angular/router";
import {MydirectiveComponent} from "./mydirective.component";
import {AlertComponent} from "./alert/alert.component";
export const mydirectiveroutes: Routes = [
  {
    path: '',
    component: MydirectiveComponent,
    children: [
      {
        path: 'alert',
        component: AlertComponent
      }
    ]
  }
];

export const MydirectiveRouting : any = RouterModule.forChild(mydirectiveroutes)
