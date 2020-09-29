import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  public clases: any[] = [
    {
      titulo: "Introducción",
      contenido: 1,
      tareas: 0
    },
    {
      titulo: "Clase 1",
      contenido: 1,
      tareas: 1
    },
    {
      titulo: "Clase 2",
      contenido: 3,
      tareas: 0
    },
    {
      titulo: "Clase 3",
      contenido: 2,
      tareas: 2
    },
    {
      titulo: "Clase 4",
      contenido: 3,
      tareas: 1
    },
  ]

  public selected: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  public classClicked(indexSelected: number):void{
    this.selected = indexSelected;
  }

}
