import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { Auth } from './services/auth';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { Layout } from './layout/layout';
import { Inicio } from './inicio/inicio';
import { Infusiones } from './infusiones/infusiones';
import { Tes } from './tes/tes';
import { Perfil } from './perfil/perfil';
import { Favoritos } from './perfil/favoritos/favoritos';
// import { Pedidos } from './perfil/pedidos/pedidos';
import { Propios } from './perfil/propios/propios';

//Sirve para la ruta del perfil si esta logueado o no,
//  si no esta logueado lo redirige al login
const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);
  return auth.isLoggedIn() ? true : router.createUrlTree(['/login']);
};

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  // Páginas SIN barra de navegación
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },

  // Páginas CON barra de navegación
  {
    path: '',
    component: Layout,
    children: [
      { path: 'inicio', component: Inicio},
      { path: 'infusiones', component: Infusiones },
      { path: 'tes', component: Tes },
      {
        path: 'perfil',
        component: Perfil,
        canActivate: [authGuard],
        children: [
          { path: '', redirectTo: 'favoritos', pathMatch: 'full' },
          { path: 'favoritos', component: Favoritos },
          // { path: 'pedidos', component: Pedidos },
          { path: 'propios', component: Propios }
        ]
      }
    ]
  },

  { path: '**', redirectTo: 'inicio' }
];