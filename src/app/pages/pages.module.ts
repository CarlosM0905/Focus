import { DocenteRoutingModule } from './docente/docente.routing';
import { CapacitadorRoutingModule } from './capacitador/capacitador.routing';
import { AdminRoutingModule } from './administrador/administrador.routing';

import { DocenteModule } from './docente/docente.module';
import { AdminModule } from './administrador/admin.module';
import { CapacitadorModule } from './capacitador/capacitador.module';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
/*================ MODULOS ================*/
import { NgZorroModule } from './../ng-zorro/ng-zorro.module';
import { SharedModule } from '../shared/shared.module';
/*================ COMPONENTES ================*/
import { PagesComponent } from './pages.component';

const COMPONENTS = [
    PagesComponent,
];

@NgModule({
    declarations: [
        PagesComponent,
    ],
    exports: [...COMPONENTS],
    imports: [
        NgZorroModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        AdminModule,
        DocenteModule,
        SharedModule,
        AdminRoutingModule,
        DocenteRoutingModule,
        CapacitadorRoutingModule,
        CapacitadorModule
    ]
})
export class PagesModule { }
