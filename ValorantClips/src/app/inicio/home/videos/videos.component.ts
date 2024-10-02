import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-videos',
  standalone: true,
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements AfterViewInit {
  videos!: NodeListOf<HTMLElement>;
  currentIndex: number = 0;

  constructor() {}

  ngAfterViewInit() {
    this.videos = document.querySelectorAll('.video');

    // Muestra el primer video
    this.videos[this.currentIndex].classList.add('active');

    // Maneja el desplazamiento entre videos
    window.addEventListener('wheel', (event) => {
      event.preventDefault(); // Evita el desplazamiento de la página

      const isScrollingDown = event.deltaY > 0;
      const previousIndex = this.currentIndex;

      // Cambia el índice según la dirección del desplazamiento
      if (isScrollingDown) {
        this.currentIndex = (this.currentIndex + 1) % this.videos.length; // Incrementa el índice
      } else {
        this.currentIndex = (this.currentIndex - 1 + this.videos.length) % this.videos.length; // Decrementa el índice
      }

      // Pausa el video anterior
      this.pauseVideo(previousIndex);

      // Oculta el video anterior con una animación
      this.videos[previousIndex].classList.remove('active'); // Oculta el video anterior
      this.videos[this.currentIndex].classList.add('active'); // Muestra el video actual

      // Agrega una clase de animación para el nuevo video
      this.videos[this.currentIndex].classList.add('fadeIn');
      setTimeout(() => {
        this.videos[this.currentIndex].classList.remove('fadeIn'); // Elimina la clase de animación después de que haya pasado la duración
      }, 500); // Asegúrate de que coincide con la duración de la animación
    });
  }

  pauseVideo(index: number) {
    const videoElement: HTMLIFrameElement = this.videos[index].querySelector('iframe')!;
    if (videoElement) {
      const src = videoElement.src;
      videoElement.src = ''; // Detener el video
      videoElement.src = src; // Reiniciar el video
    }
  }
}
