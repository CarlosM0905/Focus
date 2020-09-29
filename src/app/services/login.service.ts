import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment'
import { User } from './../interfaces/User';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  email: string;
  password: string;

  constructor(public http: HttpClient) {}

  async login(user: User, type: string): Promise<any> {
    let urlAuth: string;
    switch (type) {
      case 'docente':
        break;
      case 'administrador':
        urlAuth = environment.BACKEND_ADMIN_URL + 'auth/signin';
        break;
      case 'capacitador':
        urlAuth = environment.BACKEND_CAPACITADOR_URL +  'auth/signin';
        break;
    }

    const body = {
      email: user.email,
      password: user.password,
    };

    const userData: any = await this.http.post(urlAuth , body).toPromise();

    const response = {
      token: userData.token,
      user: userData.user,
    };

    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));

    return response;
  }
}
