import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaUsuariosComponent } from "../usuarios/lista-usuarios/lista-usuarios.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ListaUsuariosComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 // Variable para controlar el estado activo de la barra lateral
  sidebarActive = false;

// Método para alternar la barra lateral
  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }
}
