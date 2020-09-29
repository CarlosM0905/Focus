import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(private http: HttpClient) { }

  getClassrooms(): Observable<any> {
    const url = environment.BACKEND_CAPACITADOR_URL + 'classrooms';
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('user-token', token);

    return this.http.get(url, {headers});
  }

  getStudents(): Observable<any>{
    const id = 'b736827a-c348-4573-bc06-8ac0223e6735';
    const url = environment.BACKEND_CAPACITADOR_URL + 'classrooms/' + id + '/students';
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('user-token', token);

    return this.http.get(url, {headers});
  }
}
