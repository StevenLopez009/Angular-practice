import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";
import { ParentComponent } from "./parent/parent.component";
import { CalculadoraComponent } from "./calculadora/calculadora.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponenteComponent, ParentComponent, CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tienda Online';
}
