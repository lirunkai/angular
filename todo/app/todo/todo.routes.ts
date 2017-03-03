import { Routes } from '@angular/router';

import { TodoListComponent } from './list/list.component';
import { TodoDetailComponent } from './detail/detail.component';

export const TodoRoutes: Routes = [
    {
        path: 'todo/list',
        component: TodoListComponent
    },
    {
        path: 'todo/detail/:id',
        component: TodoDetailComponent
    }
];

