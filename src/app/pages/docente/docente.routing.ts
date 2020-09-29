import { DocenteComponent } from './docente.component';
/*===============> IMPORTACIONES <===============*/
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const DOCENTE_ROUTES: Routes = [
    {
        path: 'docente',
        component: DocenteComponent,
        loadChildren: () => import('./docente-child-routes.module').then(m => m.DocenteChildRoutes)
    }
];

@NgModule({
    imports: [RouterModule.forChild(DOCENTE_ROUTES)],
    exports: [RouterModule]
})
export class DocenteRoutingModule{}