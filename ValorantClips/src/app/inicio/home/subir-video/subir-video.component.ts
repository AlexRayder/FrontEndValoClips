import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-subir-video',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule, MatInputModule],
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
  videoThumbnail: string | null = null; // Para almacenar la miniatura del video

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '600px';
    dialogConfig.height = '400px';
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
      this.videoThumbnail = videoUrl; // Establecer la URL del video para la miniatura

      this.openDetailsDialog(); // Abre el modal de detalles del video
    }
  }  

  openDetailsDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '600px';
    dialogConfig.height = '500px';
    this.dialog.open(this.detailsDialog, dialogConfig);
  }

  uploadVideo(): void {
    // Aquí se manejará la lógica para subir el video al servidor
    console.log('Subiendo video:', this.videoTitle, this.videoDescription, this.selectedFileName);
    // Lógica de subida...
  }
}
