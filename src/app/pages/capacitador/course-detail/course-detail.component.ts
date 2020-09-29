import { Component, OnInit } from '@angular/core';
import { ClassroomService } from './../../../services/classroom.service';
import { Student } from './../../../interfaces/student';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  public students: Student[] = [];
  public studentSelected: Student;

  constructor(private classroomService: ClassroomService) {
  }
  
  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.classroomService.getStudents().toPromise()
      .then((data) => {
        console.log(data.students);
        this.students = data.students;
      })
      .catch((err) => {
        console.log(err);
      })
  }

}
