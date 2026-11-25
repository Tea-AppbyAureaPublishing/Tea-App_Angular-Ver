import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {
  // Datos del usuario (simulados por ahora)
  user = {
    nombre: 'Nombre de usuario',
    email: 'correo@ejemplo.com',
    avatar: 'assets/images/user-avatar.png'
  };

  // Formulario de edición
  isEditing: boolean = false;
  editForm = {
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  // Modal de cierre de sesión
  showLogoutModal: boolean = false;

  constructor(private router: Router, private auth: Auth) {}

  // Control de edición
  openEditModal(): void {
    this.editForm = {
      nombre: this.user.nombre,
      email: this.user.email,
      password: '',
      confirmPassword: ''
    };
    this.isEditing = true;
  }

  closeEditModal(): void {
    this.isEditing = false;
  }

  saveProfile(): void {
    if (this.editForm.password !== this.editForm.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    this.user.nombre = this.editForm.nombre;
    this.user.email = this.editForm.email;
    this.isEditing = false;
  }

  // Control de cierre de sesión (TEA-76)
  openLogoutModal(): void {
    this.showLogoutModal = true;
  }

  cancelLogout(): void {
    this.showLogoutModal = false;
  }

  confirmLogout(): void {
    this.showLogoutModal = false;
    this.auth.logout();
    this.router.navigate(['/inicio']);
  }
}