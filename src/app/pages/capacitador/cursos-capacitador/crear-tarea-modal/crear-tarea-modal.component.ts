import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-tarea-modal',
  templateUrl: './crear-tarea-modal.component.html',
  styleUrls: ['./crear-tarea-modal.component.css']
})
export class CrearTareaModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dateFormat = 'yyyy/MM/dd';
  monthFormat = 'yyyy/MM';

}
