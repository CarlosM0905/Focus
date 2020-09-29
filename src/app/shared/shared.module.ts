/*================ IMPORTACIONES ================*/
import { NgModule } from '@angular/core';
import { NgZorroModule } from './../ng-zorro/ng-zorro.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
/*================ COMPONENTES ================*/
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { HeaderTeacherComponent } from './header-teacher/header-teacher.component';
import { HeaderCapacitadorComponent } from './header-capacitador/header-capacitador.component';


const SHARED_COMPONENTS = [
    HeaderTeacherComponent,
    HeaderAdminComponent,
    HeaderCapacitadorComponent
];

@NgModule({
    declarations: [...SHARED_COMPONENTS],
    exports: [...SHARED_COMPONENTS],
    imports: [
        NgZorroModule,
        RouterModule,
        CommonModule
    ]
})
export class SharedModule{}