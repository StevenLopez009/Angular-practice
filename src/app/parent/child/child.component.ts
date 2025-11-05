import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  product = {
    Descripcion: "Nuevo Producto",
    Precio: 100,
    Stock: 50
  }
}
