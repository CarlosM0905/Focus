import { AdministradorComponent } from './administrador.component';
/*===============> IMPORTACIONES <===============*/
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const ADMIN_ROUTES: Routes = [
    {
        path: 'admin',
        component: AdministradorComponent,
        loadChildren: () => import('./admin-child-routes.module').then(m => m.AdminChildRoutesModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(ADMIN_ROUTES)],
    exports: [RouterModule]
})
export class AdminRoutingModule{}