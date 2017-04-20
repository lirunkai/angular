import {Route, RouterModule} from '@angular/router';
import {FormPageComponent} from './formpage.component';
import {FormComponent} from "./form/form.component";

export const formroutes: Route[] = [
  {
    path: '',
    component: FormPageComponent,
    children: [
      {
        path: 'form',
        component: FormComponent
      }
    ]
  }
];

export const FormRouting = RouterModule.forChild(formroutes);
