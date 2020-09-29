import { CapacitadorService } from './capacitador.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { ClassroomService } from './classroom.service';

// Services

const SERVICES = [
    LoginService,
    CapacitadorService,
    ClassroomService,
];


@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    providers: [...SERVICES]
})
export class ServicesModule{}