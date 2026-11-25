import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-infusiones',
  styleUrl: './infusiones.css',
  templateUrl: './infusiones.html',
})
export class Infusiones {
  searchTerm = '';

  toggleFiltros(): void {
    // Aquí abrirás o aplicarás los filtros
  }

  toggleOrden(): void {
    // Aquí cambiarás el criterio de orden
  }

  searchInfusiones(): void {
    // Aquí realizarás la búsqueda de infusiones según el término ingresado
  }
}