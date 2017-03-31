import { SignupComponent } from "./signup/signup.component";
import { EmptyComponent } from "./empty.component";
export var routes = [
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
