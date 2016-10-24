import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list.component';
import {  PersonDetailsComponent } from './person-details.component';

//route config lets you map routes to componenta
const routes: Routes = [
    //map person to the the people list component
    {
        path: 'persons',
        component: PeopleListComponent,
    },
    //map persons to person details by id
    {
        path: 'persons/:id',
        component: PersonDetailsComponent

    },

    {
        //map to person as our default route
        path: '',
        redirectTo: '/persons',
        pathMatch: 'full'
    },

];

export const routing = RouterModule.forRoot(routes);