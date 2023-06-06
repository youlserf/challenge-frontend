import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoDocumento } from 'src/app/services/document/document.model';
import { TipoDocumentoService } from 'src/app/services/document/documento.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  tipoDocumentos: TipoDocumento[] = [];
  newTipoDocumento: TipoDocumento = {} as TipoDocumento;
  actualRoute: String = 'document';
  constructor(
    private tipoDocumentoService: TipoDocumentoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllTipoDocumentos();
  }

  getAllTipoDocumentos() {
    this.tipoDocumentoService.getAllTipoDocumentos().subscribe(
      (data) => {
        this.tipoDocumentos = data;
      },
      (error) => {
        console.error('Error loading tipo documentos:', error);
      }
    );
  }

  editTipoDocumento(id: number) {
    this.router.navigate([`/${this.actualRoute}/update`], {
      queryParams: { id: id },
    });
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
