/*================ IMPORTS ================*/
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
/*================ COMPONENTS ================*/
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';

const DOCENTE_CHILD_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cursos/:id',
    component: CourseComponent,
  },
  {
    path: 'calificaciones',
    component: CalificacionesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(DOCENTE_CHILD_ROUTES)],
  exports: [RouterModule],
})
export class DocenteChildRoutes {}
