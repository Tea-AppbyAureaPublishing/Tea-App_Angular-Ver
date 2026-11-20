import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { Layout } from './layout/layout';
import { Inicio } from './inicio/inicio';
import { Infusiones } from './infusiones/infusiones';
import { Tes } from './tes/tes';
import { Perfil } from './perfil/perfil';
import { Favoritos } from './perfil/favoritos/favoritos';
import { Pedidos } from './perfil/pedidos/pedidos';
import { Propios } from './perfil/propios/propios';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Páginas SIN barra de navegación
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },

  // Páginas CON barra de navegación
  {
    path: '',
    component: Layout,
    children: [
      { path: 'inicio', component: Inicio },
      { path: 'infusiones', component: Infusiones },
      { path: 'tes', component: Tes },
      {
        path: 'perfil',
        component: Perfil,
        children: [
          { path: '', redirectTo: 'favoritos', pathMatch: 'full' },
          { path: 'favoritos', component: Favoritos },
          { path: 'pedidos', component: Pedidos },
          { path: 'propios', component: Propios }
        ]
      }
    ]
  },

  { path: '**', redirectTo: 'login' }
];