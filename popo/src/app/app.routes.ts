import {Routes} from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  },
  {
    path: 'form',
    loadChildren: './form/form.module.ts#FormModule'
  }
]
