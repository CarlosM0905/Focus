import { Component, OnInit } from '@angular/core';
import { ClassroomService } from './../../../services/classroom.service';
import { Classroom } from './../../../interfaces/classroom';

@Component({
  selector: 'app-evaluaciones',
  templateUrl: './evaluaciones.component.html',
  styleUrls: ['./evaluaciones.component.css']
})
export class EvaluacionesComponent implements OnInit {
  public classrooms: Classroom[] = [];
  public classroomSelected: Classroom;

  constructor( private classroomService: ClassroomService) {
  }

  ngOnInit(): void {
    this.initializeClassroom();
    this.getClassrooms();
  }

  initializeClassroom(): void {
    this.classroomSelected = {
      classroom_id: '0',
      name: 'Curso',
      start_date: '28/09/2020'
    }
  }

  getClassrooms(): void {
    this.classroomService.getClassrooms().toPromise()
      .then((data) => {
        this.classrooms = data.rows;
        console.log(this.classrooms);
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
