import { Routes } from '@angular/router';
import { HomeComponent } from './inicio/home/home.component';
import { LoginComponent } from './inicio/login/login.component';
import { UsuariosComponent } from './inicio/usuarios/usuarios.component';
import { VideosComponent } from './inicio/home/videos/videos.component';
import { SubirVideoComponent } from './inicio/home/subir-video/subir-video.component';

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
    {
        path: "subirvideo",
        component: SubirVideoComponent
    },
];
