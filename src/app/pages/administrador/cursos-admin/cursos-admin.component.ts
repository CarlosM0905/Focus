import { CapacitadorService } from './../../../services/capacitador.service';
import { Component, OnInit } from '@angular/core';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer/drawer-options';

@Component({
  selector: 'app-cursos-admin',
  templateUrl: './cursos-admin.component.html',
  styleUrls: ['./cursos-admin.component.css']
})
export class CursosAdminComponent implements OnInit {

  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 !== 0));
        this.refreshCheckedStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 === 0));
        this.refreshCheckedStatus();
      }
    }
  ];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: Classroom[] = [];
  listOfData: Classroom[] = [];
  setOfCheckedId = new Set<number>();
  visible = false;
  placement: NzDrawerPlacement = 'bottom';
  courseSelected: any;

  constructor(public capacitadorService: CapacitadorService) { }

  ngOnInit(): void {

    this.getClassrooms();

    // this.listOfData = new Array(200).fill(0).map((_, index) => {
    //   return {
    //     id: index,
    //     name: `Eddie King ${index}`,
    //     trainer: `Edward King ${index}`,
    //     totalClasses: 32,
    //     description: `A class for the no. ${index}`,
    //     date: new Date().toDateString()
    //   };
    // });
  }

  async getClassrooms(): Promise<any>{
    await this.capacitadorService.getClassrooms().toPromise()
    .then((response: any) => {
        console.log(response);
        response.rows.forEach((classroom, index) => {
          console.log(classroom);
          this.listOfData.push({
            id: classroom.index,
            name: classroom.name,
            date: classroom.start_date,
            description: classroom.course.description,
            totalClasses: index + 1,
            trainer: classroom.teacher.first_name + '' + classroom.teacher.last_name
          });
        });
    })
    .catch(err => console.log);
    this.listOfData = this.listOfData;
    console.log(this.listOfData);
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: Classroom[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  selectCourse(data): void{
    this.selectCourse = data;
  }

}


interface Classroom {
  id: number;
  name: string;
  description: string;
  date: string;
  trainer: string;
  totalClasses: number;
}