import { CursosCapacitadorComponent } from './cursos-capacitador/cursos-capacitador.component';
/*================ IMPORTS ================*/
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { EvaluacionesComponent } from './evaluaciones/evaluaciones.component';
/*================ COMPONENTS ================*/

const CAPACITADOR_CHILD_ROUTES: Routes = [
    {
        path: 'evaluaciones',
        component: EvaluacionesComponent,
    },
    {
        path: 'evaluaciones/course-detail',
        component: CourseDetailComponent,
    },
    {
        path: 'cursos',
        component: CursosCapacitadorComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(CAPACITADOR_CHILD_ROUTES)],
  exports: [RouterModule],
})
export class CapacitadorChildRoutes {}
