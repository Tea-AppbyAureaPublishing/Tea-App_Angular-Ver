import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export interface Preparacion {
  temperatura: string;
  tiempo: string;
  cantidad: string;
}

export interface Infusion {
  id: number;
  nombre: string;
  tipo: string;
  descripcion: string;
  beneficios: string;
  notaDeCata: string;
  preparacion: Preparacion;
}

@Component({
  imports: [FormsModule],
  selector: 'app-infusiones',
  styleUrl: './infusiones.css',
  templateUrl: './infusiones.html',
})
export class Infusiones implements OnInit {
  private http = inject(HttpClient);

  searchTerm = '';
  infusiones: Infusion[] = [];
  cargando = true;
  error = false;

  ngOnInit(): void {

    // Ejemplo exacto de la imagen que enviaste (repetido 3 veces para ver 1 fila completa)
    const ejemploInfusion: Omit<Infusion, 'id'> = {
      nombre: 'Titulo',
      tipo: 'Ejemplo',
      descripcion:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      beneficios:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      notaDeCata: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      preparacion: {
        temperatura: '00 - 00 °C',
        tiempo: '0- 00 minutos',
        cantidad: '0 - 0 gramos',
      }
    };

    this.infusiones = [
      { id: 1, ...ejemploInfusion },
      { id: 2, ...ejemploInfusion },
      { id: 3, ...ejemploInfusion },
    ];
  }

  cargarInfusiones(): void {
    // Recuerda cambiar esta URL por la ruta real de tu servidor (ej. 'http://localhost:3000/api/infusiones')
    const urlServidor = 'https://tu-api.com';

    this.http.get<Infusion[]>(urlServidor).subscribe({
      next: (datos) => {
        this.infusiones = datos;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar infusiones:', err);
        this.error = true;
        this.cargando = false;
      }
    });
  }

  agregarCesta(item: Infusion): void {
    console.log('Añadido a la cesta:', item.nombre);
    // Aquí va la lógica para añadir al carrito/cesta
  }

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
