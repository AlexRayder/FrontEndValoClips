import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from '../home/videos/videos.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, VideosComponent, UsuariosComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sidebarActive = false;
  selectedComponent: any = null; // Variable para el componente seleccionado
  darkModeActive = false; // Variable para rastrear el estado del modo oscuro

  ngOnInit() {
    const darkMode = localStorage.getItem('darkMode');
    this.darkModeActive = darkMode === 'true'; // Inicializa el modo oscuro desde localStorage
  }

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  toggleDarkMode() {
    this.darkModeActive = !this.darkModeActive;
    localStorage.setItem('darkMode', this.darkModeActive ? 'true' : 'false'); // Guarda la preferencia del usuario
  }

  // Método para cargar componentes dinámicamente
  loadComponent(componentName: string) {
    if (componentName === 'videos') {
      this.selectedComponent = VideosComponent;
    } else if (componentName === 'usuarios') {
      this.selectedComponent = UsuariosComponent;
    } else {
      this.selectedComponent = null; // Establecer en null si no hay coincidencias
    }
  }
}
