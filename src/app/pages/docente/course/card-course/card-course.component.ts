import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.css']
})
export class CardCourseComponent implements OnInit {

  @Input() clase:any;
  @Input() index:number;
  @Input() selected:number;
  @Output() onClassClick:EventEmitter<Number>;

  constructor() { 
    this.onClassClick = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public cardSelected(){
    this.onClassClick.emit(this.index);
  }

}
