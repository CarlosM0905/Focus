import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapacitadorService {

  constructor(public http: HttpClient) { }

  getUsers(): Observable<any>{
    const url = environment.BACKEND_ADMIN_URL + 'users';
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('user-token', token);
    return this.http.get(url, {headers});
  }

  getCourses(): Observable<any>{
    const url = environment.BACKEND_ADMIN_URL + 'courses';
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('user-token', token);
    return this.http.get(url, {headers});
  }

  getClassrooms(): Observable<any>{
    const url = environment.BACKEND_ADMIN_URL + 'classrooms';
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('user-token', token);
    return this.http.get(url, {headers});
  }

  getStudents(classroomId: string): Observable<any>{
    const url = environment.BACKEND_ADMIN_URL + 'classrooms/' + classroomId + '/students';
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('user-token', token);
    return this.http.get(url, {headers});
    }
}
