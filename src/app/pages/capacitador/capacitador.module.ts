import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
/*================ MODULOS ================*/
import { NgZorroModule } from './../../ng-zorro/ng-zorro.module';
/*================ COMPONENTES ================*/
import { CapacitadorComponent } from './capacitador.component';
import { EvaluacionesComponent } from './evaluaciones/evaluaciones.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CursosCapacitadorComponent } from './cursos-capacitador/cursos-capacitador.component';
import { CrearCursoModalComponent } from './cursos-capacitador/crear-curso-modal/crear-curso-modal.component';
import { CrearTareaModalComponent } from './cursos-capacitador/crear-tarea-modal/crear-tarea-modal.component';
import { CrearExamenModalComponent } from './cursos-capacitador/crear-examen-modal/crear-examen-modal.component';


const CAPACITADOR_COMPONENTS = [
    CapacitadorComponent,
    EvaluacionesComponent,
    CourseDetailComponent,
    CursosCapacitadorComponent,
    CrearCursoModalComponent,
    CrearTareaModalComponent,
    CrearExamenModalComponent
];

@NgModule({
    declarations: [...CAPACITADOR_COMPONENTS],
    exports: [...CAPACITADOR_COMPONENTS],
    imports: [
        NgZorroModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        SharedModule
    ]
})
export class CapacitadorModule{}