/*================ IMPORTACIONES ================*/
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
/*================ COMPONENTES ================*/
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
/*================ MODULOS ================*/
import { NgZorroModule } from '../ng-zorro/ng-zorro.module';

const AUTH_COMPONENTS = [
  LoginComponent,
  RegisterComponent
];

@NgModule({
  declarations: [
    ...AUTH_COMPONENTS
  ],
  exports: [],
  imports: [
    NgZorroModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }
