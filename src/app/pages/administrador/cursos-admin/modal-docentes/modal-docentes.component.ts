import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-docentes',
  templateUrl: './modal-docentes.component.html',
  styleUrls: ['./modal-docentes.component.css']
})
export class ModalDocentesComponent implements OnInit {

  @Input() courseSelected: any;
  constructor() { }

  ngOnInit(): void {
  }

}
