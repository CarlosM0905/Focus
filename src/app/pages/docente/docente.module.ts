import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
/*================ MODULOS ================*/
import { NgZorroModule } from './../../ng-zorro/ng-zorro.module';
/*================ COMPONENTES ================*/
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { CardCourseComponent } from './course/card-course/card-course.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { DocenteComponent } from './docente.component';


const DOCENTE_COMPONENTS = [
    HomeComponent,
    CourseComponent,
    CardCourseComponent,
    CalificacionesComponent,
];

@NgModule({
    declarations: [...DOCENTE_COMPONENTS, DocenteComponent],
    exports: [...DOCENTE_COMPONENTS],
    imports: [
        NgZorroModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        SharedModule
    ]
})
export class DocenteModule{}
