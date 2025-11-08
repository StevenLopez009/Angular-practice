import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Producto } from './producto.model';

@Component({
  selector: 'app-componente-for',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './componente-for.component.html',
  styleUrl: './componente-for.component.css'
})
export class ComponenteForComponent {
  productos: Producto[] = [
    new Producto('Laptop', 1200),
    new Producto('Smartphone', 800),
    new Producto('Tablet', 400)
  ]

  nuevoProducto: string = '';
  nuevoPrecio: number | null = null;

  agregarProducto(nuevoProducto: string, nuevoPrecio: number | null): void {
    if (this.nuevoProducto.trim() !== '' && this.nuevoPrecio !== null) {
      const producto = new Producto(this.nuevoProducto, this.nuevoPrecio);

      this.productos.push(producto);
      this.nuevoProducto = '';
      this.nuevoPrecio = null;
    }
  }
}

