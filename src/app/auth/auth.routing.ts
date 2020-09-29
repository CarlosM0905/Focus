/*================ IMPORTACIONES ================*/
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
/*================ COMPONENTES ================*/
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const AUTH_ROUTES: Routes = [
    {
        path: 'inicia-sesion',
        component: LoginComponent
    },
    {
        path: 'registrate',
        component: RegisterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(AUTH_ROUTES)],
    exports: [RouterModule]
})
export class AuthRoutingModule{}
