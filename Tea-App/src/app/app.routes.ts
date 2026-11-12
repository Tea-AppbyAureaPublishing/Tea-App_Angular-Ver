import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { Perfil } from './perfil/perfil';
import { Favoritos } from './perfil/favoritos/favoritos';
import {Pedidos} from './perfil/pedidos/pedidos';
import { Propios } from './perfil/propios/propios';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro }, 
  { 
    path: 'perfil', 
    component: Perfil,
    children: [
      { path: '', redirectTo: 'favoritos', pathMatch: 'full' },
      { path: 'favoritos', component: Favoritos },
      { path: 'pedidos', component: Pedidos },
      { path: 'propios', component: Propios }
    ]
  },
  { path: '**', redirectTo: 'login' }
];
