import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { Perfil } from './perfil/perfil';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro }, 
  { 
    path: 'perfil', 
    component: Perfil,
    children: [
      { path: '', redirectTo: 'favoritos', pathMatch: 'full' }
    ]
  }
];
