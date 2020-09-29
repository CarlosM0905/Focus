import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-capacitador',
  templateUrl: './cursos-capacitador.component.html',
  styleUrls: ['./cursos-capacitador.component.css']
})
export class CursosCapacitadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  panels = [
    {
      active: false,
      name: 'Clase 01',
      tag: 'Clase'
    },
    {
      active: false,
      name: 'Tarea 01',
      tag: 'Tarea'
    },
    {
      active: false,
      name: 'Exámen Parcial',
      tag: 'Evaluación'
    },
    {
      active: false,
      name: 'Exámen Final',
      tag: 'Evaluación'
    },
  ];

}
