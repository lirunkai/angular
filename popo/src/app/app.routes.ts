import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'form',
    loadChildren: './pages/form/formpage.module.ts#FormPageModule'
  },
  {
    path: 'pages',
    loadChildren: './pages/boke/boke.module.ts#BokeModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]
