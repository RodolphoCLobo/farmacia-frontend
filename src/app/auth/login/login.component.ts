import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.errorMessage = null;
      const credentials = { user: this.form.value };

      this.http.post<{ token: string }>('http://localhost:3000/login', credentials)
        .subscribe({
          next: (response) => {
            localStorage.setItem('auth_token', response.token);
            this.router.navigate(['/dashboard']);
          },
          error: (error) => {
            const err = error.error;
            if (Array.isArray(err?.errors)) {
              this.errorMessage = err.errors.join(', ');
            } else {
              this.errorMessage = err?.error || 'Erro ao fazer login';
            }
          }
        });
    }
  }
}
