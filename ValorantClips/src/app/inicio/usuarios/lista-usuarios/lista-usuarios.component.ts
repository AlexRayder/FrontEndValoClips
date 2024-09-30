import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../../modelos/usuarios';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../../servicios/usuario.service';


@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Usuarios[];

  constructor(private usuarioServicio: UsuarioService){}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  private obtenerUsuarios(){
    this.usuarioServicio.obtenerListaUsuarios().subscribe(dato =>{
      this.usuarios = dato;
    });
  }
}
