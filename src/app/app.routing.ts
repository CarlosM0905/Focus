import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Modules
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

const APP_ROUTES: Routes = [
    {
        path: '', redirectTo: '/inicia-sesion', pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES),
        AuthRoutingModule,
        PagesRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}
