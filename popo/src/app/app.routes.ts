import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./page/login/login.component";
import {LogoutComponent} from "./page/logout/logout.component";
import {CenterComponent} from "./page/center/center.component";
import {EditorComponent} from "./page/editor/editor.component";
import {QiniuComponent} from "./page/qiniu/qiniu.component";

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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'center',
    component: CenterComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  },
  {
    path: 'qiniu',
    component: QiniuComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

export const AppRoutingProvidors: any[] = [];

export const AppRouting = RouterModule.forRoot(routes, {useHash: true})
