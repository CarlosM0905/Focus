import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
/*================ MODULOS ================*/
import { NgZorroModule } from './../../ng-zorro/ng-zorro.module';
/*================ COMPONENTES ================*/
import { CursosAdminComponent } from './cursos-admin/cursos-admin.component';
import { CrearCursoComponent } from './cursos-admin/crear-curso/crear-curso.component';
import { CapacitadoresAdminComponent } from './capacitadores-admin/capacitadores-admin.component';
import { DocentesAdminComponent } from './docentes-admin/docentes-admin.component';
import { AdministradorComponent } from './administrador.component';
import { ModalDocentesComponent } from './cursos-admin/modal-docentes/modal-docentes.component';


const ADMIN_COMPONENTS = [
    CursosAdminComponent,
    CrearCursoComponent,
    CapacitadoresAdminComponent,
    DocentesAdminComponent,
    AdministradorComponent,
    ModalDocentesComponent
];

@NgModule({
    declarations: [...ADMIN_COMPONENTS, ],
    exports: [...ADMIN_COMPONENTS],
    imports: [
        NgZorroModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        SharedModule
    ]
})
export class AdminModule{}
