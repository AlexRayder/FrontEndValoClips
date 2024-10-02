import { Routes } from '@angular/router';
import { HomeComponent } from './inicio/home/home.component';
import { LoginComponent } from './inicio/login/login.component';
import { UsuariosComponent } from './inicio/usuarios/usuarios.component';
import { VideosComponent } from './inicio/home/videos/videos.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "usuarios",
        component: UsuariosComponent
    },
    {
        path: "videos",
        component: VideosComponent
    },
];
