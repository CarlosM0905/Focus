import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Guards

const GUARDS = [

];


@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    providers: [...GUARDS]
})
export class GuardsModule{}