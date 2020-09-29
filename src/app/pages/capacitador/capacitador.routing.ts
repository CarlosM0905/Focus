import { CapacitadorComponent } from './capacitador.component';
/*===============> IMPORTACIONES <===============*/
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const CAPACITADOR_ROUTES: Routes = [
    {
        path: 'capacitador',
        component: CapacitadorComponent,
        loadChildren: () => import('./capacitador-child-routes.module').then(m => m.CapacitadorChildRoutes)
    }
];

@NgModule({
    imports: [RouterModule.forChild(CAPACITADOR_ROUTES)],
    exports: [RouterModule]
})
export class CapacitadorRoutingModule{}