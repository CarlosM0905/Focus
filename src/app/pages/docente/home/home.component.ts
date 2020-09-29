import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  usuario: any[] = [
    {
      nombre: 'Franz'
    },
  ];

  docentes: any[] = [
    {
      curso: 'Cursos de herramientas JS',
      nombre: 'Fernandito Herrera',
      clase: '32 clases',
      fecha: 'Inicio 25/8 hasta 30/9'
    },
    {
      curso: 'Cursos de React Avanzado',
      nombre: 'Anahi Salgado',
      clase: '10 clases',
      fecha: 'Inicio 25/8 hasta 30/9'
    },
    {
      curso: 'Cursos Angular Avanzado',
      nombre: 'Fazt',
      clase: '17 clases',
      fecha: 'Inicio 25/8 hasta 30/9'
    },
    {
      curso: 'Como usar Meet',
      nombre: 'Patricio Marroquin',
      clase: '18 clases',
      fecha: 'Inicio 25/8 hasta 30/9'
    },
    {
      curso: 'Zoom, de 0 a 100!',
      nombre: 'David Cadenillas',
      clase: '20 clases',
      fecha: 'Inicio 25/8 hasta 30/9'
    },
    {
      curso: 'Curso de Excel Intermedio',
      nombre: 'Jean Osco',
      clase: '25 clases',
      fecha: 'Inicio 25/8 hasta 30/9'
    },
    {
      curso: 'Master en Ofimatica',
      nombre: 'El gran Daniel Torrealva',
      clase: '32 clases',
      fecha: 'Inicio 25/8 hasta 30/9'
    },
    {
      curso: 'Cursos de herramientas tic',
      nombre: 'Sotelo Mentor TIC TAC',
      clase: '32 clases',
      fecha: 'Inicio 25/8 hasta 30/9'
    },
  ];


  ngOnInit(): void {
  }
}
