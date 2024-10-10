import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-subir-video',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule,MatCardModule,MatDialogModule,MatRadioModule,MatExpansionModule],
  templateUrl: './subir-video.component.html',
  styleUrls: ['./subir-video.component.css']
})
export class SubirVideoComponent implements OnInit {
  @ViewChild('dialogTemplate', { static: true }) dialogTemplate!: TemplateRef<any>;
  @ViewChild('detailsDialog', { static: true }) detailsDialog!: TemplateRef<any>;
  @ViewChild('fileInput') fileInput!: ElementRef;

  selectedFileName: string = '';
  selectedFileSize: number = 0;
  videoTitle: string = '';
  videoDescription: string = '';
  videoThumbnail: string | null = null;
  activeTab: string = 'details'; // Variable para controlar qué sección mostrar
  progressPercentage: number = 0; // Progreso de la subida
  videoVisibility: string = 'privado'; // Valor inicial
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '900px';
    dialogConfig.height = '700px';
    dialogConfig.maxWidth = '100%';
    dialogConfig.disableClose = true;
    this.dialog.open(this.dialogTemplate, dialogConfig);
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0]; // Capturamos solo un archivo
    if (file) {
      this.selectedFileName = file.name;
      this.selectedFileSize = file.size / (1024 * 1024); // Convertimos a MB

      // Establecer el título del video a partir del nombre del archivo
      this.videoTitle = file.name.split('.').slice(0, -1).join('.');

      // Generar la miniatura
      const videoUrl = URL.createObjectURL(file);
      this.videoThumbnail = videoUrl;

      this.openDetailsDialog(); // Abre el modal de detalles del video
    }
  }

  openDetailsDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '900px';
    dialogConfig.height = '700px';
    dialogConfig.maxWidth = '100%';
    this.dialog.open(this.detailsDialog, dialogConfig);
  }

  uploadVideo(): void {
    console.log('Subiendo video:', this.videoTitle, this.videoDescription, this.selectedFileName);

    // Simular progreso de subida
    this.simulateUpload();
  }

  // Método simulado para mostrar progreso
  simulateUpload(): void {
    this.progressPercentage = 0; // Reiniciar progreso
    const interval = setInterval(() => {
      this.progressPercentage += 10; // Incrementar el progreso
      if (this.progressPercentage >= 100) {
        clearInterval(interval);
        // Aquí puedes manejar el final de la subida
      }
    }, 500); // Ajusta el intervalo según tu necesidad
  }

  // Métodos para los botones
  showDetails(): void {
    this.activeTab = 'details'; // Cambiar a la pestaña de detalles
  }

  showVideoElements(): void {
    this.activeTab = 'elements'; // Cambiar a la pestaña de elementos del video
  }

  showVerification(): void {
    this.activeTab = 'verification'; // Cambiar a la pestaña de verificación
  }

  showVisibility(): void {
    this.activeTab = 'visibility'; // Cambiar a la pestaña de visibilidad
  }

  addSubtitles() {
    console.log('Agregar subtítulos');
    // Implementa la lógica para agregar subtítulos aquí
  }

  addEndScreen() {
    console.log('Agregar pantalla final');
    // Implementa la lógica para agregar una pantalla final aquí
  }

  addCards() {
    console.log('Agregar tarjetas');
    // Implementa la lógica para agregar tarjetas aquí
  }

  saveOrPublish() {
    // Lógica para guardar o publicar el video, usando el valor de videoVisibility
    console.log('Guardar o publicar el video como:', this.videoVisibility);
  }
}
