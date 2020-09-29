import { DocenteComponent } from './docente/docente.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { RouterModule } from '@angular/router';
/*================ IMPORTS ================*/
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
/*================ COMPONENTS ================*/
import { CourseComponent } from './docente/course/course.component';
import { HomeComponent } from './docente/home/home.component';
import { CalificacionesComponent } from './docente/calificaciones/calificaciones.component';
import { CommonModule } from '@angular/common';

const PAGES_CHILD_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/admin'
  },
  {
    path: 'admin',
    redirectTo: '/admin'
  },
  {
    path: 'docente',
    redirectTo: '/docente'
  },
];

@NgModule({
  imports: [RouterModule.forChild(PAGES_CHILD_ROUTES),
            CommonModule
            ],
    exports: [RouterModule],
})
export class ChildRoutesModule { }