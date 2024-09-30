import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Usuarios } from '../modelos/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // URL que obtiene todos los usuarios del backend
  private baseUrl = "http://localhost:8080/api/Usuarios/ObtenerUsuarios";

  constructor(private httpClient: HttpClient) { }

  // Método para obtener la lista de usuarios
  obtenerListaUsuarios(): Observable<Usuarios[]> {
    return this.httpClient.get<Usuarios[]>(this.baseUrl);
  }
}
