import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {

  public cursos: any[] = [
    {
      titulo: "Introducción a algo"
    },
    {
      titulo: "Capacitación I"
    },
    {
      titulo: "Valorant II"
    },
    {
      titulo: "Cómo ser radiante en 24h"
    },
    {
      titulo: "Cómo mentir en Among Us"
    },
  ]

  constructor() { }

  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  listOfData = [
    {
      id: 1,
      topico: 'Trabajo 01',
      calificacion: 14,
      expand: false,
      gruponotas: 'N1',
      fecha: '06/10/2019',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
      id: 2,
      topico: 'Trabajo 02',
      calificacion: 20,
      expand: false,
      gruponotas: 'N1',
      fecha: '06/10/2019',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },{
      id: 3,
      topico: 'Trabajo 03',
      calificacion: 17,
      expand: false,
      gruponotas: 'N1',
      fecha: '06/10/2019',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },{
      id: 4,
      topico: 'Trabajo 04',
      calificacion: 16,
      expand: false,
      gruponotas: 'N1',
      fecha: '06/10/2019',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },{
      id: 5,
      topico: 'Trabajo 05',
      calificacion: 14,
      expand: false,
      gruponotas: 'N1',
      fecha: '06/10/2019',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },{
      id: 6,
      topico: 'Trabajo 06',
      calificacion: 18,
      expand: false,
      gruponotas: 'N1',
      fecha: '06/10/2019',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },{
      id: 7,
      topico: 'Trabajo 01',
      calificacion: 14,
      expand: false,
      gruponotas: 'N1',
      fecha: '06/10/2019',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
      id: 8,
      topico: 'Trabajo 01',
      calificacion: 14,
      expand: false,
      gruponotas: 'N1',
      fecha: '06/10/2019',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
      id: 9,
      topico: 'Trabajo 01',
      calificacion: 14,
      expand: false,
      gruponotas: 'N1',
      fecha: '06/10/2019',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
   
  ];

  ngOnInit(): void {
  }


}
