import { Routes } from '@angular/router';
import { InterfazPage } from './fealter/InterfazPage/InterfazPage';

export const routes: Routes = [

    {
        path:'',
        component: InterfazPage
    },
    {
        path: 'heuristica',
        loadChildren: () => import('./h1-page/h1.routes').then(m => m.heuristicaRoutes)
    }
    
];
