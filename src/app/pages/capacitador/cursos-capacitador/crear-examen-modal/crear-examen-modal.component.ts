import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-examen-modal',
  templateUrl: './crear-examen-modal.component.html',
  styleUrls: ['./crear-examen-modal.component.css']
})
export class CrearExamenModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  dateFormat = 'yyyy/MM/dd';
  monthFormat = 'yyyy/MM';
}
