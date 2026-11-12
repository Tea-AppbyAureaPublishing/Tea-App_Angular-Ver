import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginForm: FormGroup;
  forgotForm: FormGroup;
  
  // Control de estados de pantalla: 'login' o 'forgot'
  currentView: 'login' | 'forgot' = 'login'; 
  
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      // Eliminamos la validación estricta de Email para permitir texto libre (usuario)
      identifier: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.forgotForm = this.fb.group({
      resetEmail: ['', [Validators.required, Validators.email]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { identifier, password } = this.loginForm.value;
      console.log('Intentando entrar con:', identifier);
      this.router.navigate(['/perfil']);
    }
  }

  // Simulación de envío de correo de restablecimiento
  onResetPassword() {
    if (this.forgotForm.valid) {
      const email = this.forgotForm.get('resetEmail')?.value;
      console.log(`Enviando correo de recuperación a: ${email}`);
      
      this.successMessage = `Se ha enviado un enlace de recuperación a ${email}`;
      this.errorMessage = '';
      
      // Opcional: Volver al login automáticamente tras unos segundos
      setTimeout(() => {
        this.setView('login');
        this.successMessage = '';
        this.forgotForm.reset();
      }, 4000);
    }
  }

  setView(view: 'login' | 'forgot') {
    this.currentView = view;
    this.errorMessage = '';
    this.successMessage = '';
  }
}
