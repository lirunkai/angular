import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'boke',
    loadChildren: './page/boke/boke.module#BokeModule',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

export const AppRoutingProvidors: any[] = [];

export const AppRouting = RouterModule.forRoot(routes)
