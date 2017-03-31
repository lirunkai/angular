import { Routes} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";
import {EmptyComponent} from "./empty.component";
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/form/signup',
        pathMatch: 'full'
    },
    {
        path: 'form/signup',
        component: SignupComponent
    },
    {
        path: '**',
        component: EmptyComponent
    }
];
