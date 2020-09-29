import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './../../interfaces/User';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  passwordVisible = false;
  password?: string;
  formUser: FormGroup;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeFormUser();
  }

  get emailInvalid(): boolean {
    return (
      this.formUser.get('email').invalid && this.formUser.get('email').touched
    );
  }

  get passwordInvalid(): boolean {
    return (
      this.formUser.get('password').invalid &&
      this.formUser.get('password').touched
    );
  }

  initializeFormUser(): void {
    this.formUser = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      typeUser: ['', Validators.required],
    });
  }

  submitUserData(): void {
    this.user = {
      email: this.formUser.get('email').value,
      password: this.formUser.get('password').value,
    };

    const typeUser = this.formUser.get('typeUser').value;
    localStorage.setItem('typeUser', typeUser);

    this.loginService
      .login(this.user, typeUser)
      .then(() => {
        this.navigateTo(typeUser);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  navigateTo(type): void {
    switch (type) {
      case 'docente':
        this.router.navigate(['/docente']);
        break;
      case 'administrador':
        this.router.navigate(['/admin']);
        break;
      case 'capacitador':
        this.router.navigate(['/capacitador']);
        break;
    }
  }
}
