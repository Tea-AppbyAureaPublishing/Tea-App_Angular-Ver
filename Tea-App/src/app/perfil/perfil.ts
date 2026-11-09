import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-perfil',
  styleUrl: './perfil.css',
  templateUrl: './perfil.html',
})
export class Perfil {
  pestanaActiva: string = 'favoritos'; // Estado inicial

  cambiarPestana(nombrePestana: string) {
    this.pestanaActiva = nombrePestana;
  }
}
