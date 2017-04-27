import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'directive',
    loadChildren: './page/mydirective/mydirective.module#MydirectiveModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

export const AppRoutingProvidors: any[] = [];

export const AppRouting = RouterModule.forRoot(routes)
