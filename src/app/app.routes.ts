import { Routes } from '@angular/router';
import { InterfazPage } from './fealter/InterfazPage/InterfazPage';

export const routes: Routes = [

    {
        path:'',
        component: InterfazPage,
        data: {
            title: 'MV Creative Developer | Componentes UI Angular',
            description: 'Explora componentes UI modernos creados en Angular con Tailwind CSS y DaisyUI.'
        }
    },
    {
        path: 'heuristica',
        loadChildren: () => import('./h1-page/h1.routes').then(m => m.heuristicaRoutes),
        data: {
            title: 'Heurísticas de Usabilidad | MV Developer',
            description: 'Las 10 Heurísticas de Usabilidad de Nielsen explicadas con ejemplos prácticos.'
        }
    }
    
];
