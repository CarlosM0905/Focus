import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
// Componentes
import { RouterModule, Routes } from '@angular/router';

const PAGES_ROUTES: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule)
    }
];
@NgModule({
    imports: [RouterModule.forChild(PAGES_ROUTES)],
    exports: [RouterModule]
})
export class PagesRoutingModule{}
