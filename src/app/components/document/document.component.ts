import { Component, OnInit } from '@angular/core';
import { TipoDocumento } from 'src/app/services/document/document.model';
import { TipoDocumentoService } from 'src/app/services/document/documento.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
})
export class DocumentComponent implements OnInit {
  tipoDocumentos: TipoDocumento[] = [];
  newTipoDocumento: TipoDocumento = {} as TipoDocumento;
  selectedTipoDocumento: TipoDocumento | null = null;

  constructor(private tipoDocumentoService: TipoDocumentoService) {}

  ngOnInit() {
    this.loadTipoDocumentos();
  }

  loadTipoDocumentos() {
    this.tipoDocumentoService.getAllTipoDocumentos().subscribe(
      (tipoDocumentos) => {
        this.tipoDocumentos = tipoDocumentos;
      },
      (error) => {
        console.error('Error loading tipo documentos:', error);
      }
    );
  }

  createTipoDocumento() {
    this.tipoDocumentoService
      .createTipoDocumento(this.newTipoDocumento)
      .subscribe(
        (createdTipoDocumento) => {
          this.tipoDocumentos.push(createdTipoDocumento);
          this.newTipoDocumento = {} as TipoDocumento;
        },
        (error) => {
          console.error('Error creating tipo documento:', error);
        }
      );
  }

  getTipoDocumentoById(id: number) {
    this.tipoDocumentoService.getTipoDocumentoById(id).subscribe(
      (tipoDocumento) => {
        this.selectedTipoDocumento = tipoDocumento;
      },
      (error) => {
        console.error(`Error loading tipo documento with ID ${id}:`, error);
      }
    );
  }

  updateTipoDocumento(id: number) {
    if (this.selectedTipoDocumento) {
      this.tipoDocumentoService
        .updateTipoDocumento(id, this.selectedTipoDocumento)
        .subscribe(
          (updatedTipoDocumento) => {
            const index = this.tipoDocumentos.findIndex(
              (tipoDocumento) => tipoDocumento.idTipoDocumento === id
            );
            if (index !== -1) {
              this.tipoDocumentos[index] = updatedTipoDocumento;
              this.selectedTipoDocumento = null;
            }
          },
          (error) => {
            console.error(
              `Error updating tipo documento with ID ${id}:`,
              error
            );
          }
        );
    }
  }

  deleteTipoDocumento(id: number) {
    this.tipoDocumentoService.deleteTipoDocumento(id).subscribe(
      () => {
        this.tipoDocumentos = this.tipoDocumentos.filter(
          (tipoDocumento) => tipoDocumento.idTipoDocumento !== id
        );
      },
      (error) => {
        console.error(`Error deleting tipo documento with ID ${id}:`, error);
      }
    );
  }
}
