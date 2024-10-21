

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';  // Importez RouterModule ici
import { FeatherIconsComponent } from '../../../../../shared/components/ui/feather-icons/feather-icons.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports:[FeatherIconsComponent,CommonModule, ReactiveFormsModule,RouterModule],

})
export class LoginFormComponent {

  loginForm: FormGroup;
  public isShow: boolean = false;
  public inputType: string = 'password';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  showPassword() {
    this.isShow = !this.isShow;
    this.inputType = this.isShow ? 'text' : 'password';
  }
  

  onLogin() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.http.post('http://localhost:8000/api/login', loginData).subscribe({
        next: (response: any) => {
          console.log('Login successful', response);
          // localStorage.setItem('access_token', response.access_token);
        },
        error: (error) => {
          console.error('Login error', error);
        }
      });
    }
  }
}
