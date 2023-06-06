import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoDocumento } from 'src/app/services/document/document.model';
import { TipoDocumentoService } from 'src/app/services/document/documento.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  newTipoDocumento: TipoDocumento = {
    idTipoDocumento: 0,
    codigo: '',
    nombre: '',
    descripcion: '',
    estado: false,
  };
  isEditMode: boolean = false;

  constructor(
    private tipoDocumentoService: TipoDocumentoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.getTipoDocumentoById(params['id']);
      }
    });
  }

  getTipoDocumentoById(id: number) {
    this.tipoDocumentoService.getTipoDocumentoById(id).subscribe((data) => {
      this.newTipoDocumento = data;
    });
  }

  createTipoDocumento() {
    this.tipoDocumentoService
      .createTipoDocumento(this.newTipoDocumento)
      .subscribe((data) => {
        this.newTipoDocumento = {} as TipoDocumento;
        this.router.navigate(['/document']);
      });
  }

  updateTipoDocumento() {
    const id = this.newTipoDocumento.idTipoDocumento;
    this.tipoDocumentoService
      .updateTipoDocumento(id, this.newTipoDocumento)
      .subscribe((data) => {
        this.router.navigate(['/document']);
      });
  }
}
