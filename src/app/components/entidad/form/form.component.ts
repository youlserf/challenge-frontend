import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataModel } from 'src/app/services/entidad/docon.model';
import { Entity } from 'src/app/services/entidad/entidad.model';
import { EntidadService } from 'src/app/services/entidad/entidad.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  newEntity: Entity = {} as Entity;
  isEditMode: boolean = false;
  isFormValid: boolean = false;
  tipoDocumentoContribuyentes: DataModel = {} as DataModel;

  constructor(
    private entidadService: EntidadService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.getEntidadById(params['id']);
      }
    });

    this.entidadService.getAllTipoDocumentoAndTipoContribuyente().subscribe(
      (data) => {
        this.tipoDocumentoContribuyentes = data;
        console.log(data);
      },
      (error) => {
        // Handle error
      }
    );

    /* this.validateForm(); */
  }

  getEntidadById(id: number) {
    console.log(id);
    this.entidadService.getEntityById(id).subscribe((data) => {
      this.newEntity = data;
      console.log(data);
    });
  }

  createEntidad() {
    const addEntity: any = {
      tipoDocumento: {
        idTipoDocumento: parseInt(this.newEntity.tipoDocumento),
      },
      numeroDocumento: this.newEntity.numeroDocumento,
      razonSocial: this.newEntity.razonSocial,
      nombreComercial: this.newEntity.nombreComercial,
      tipoContribuyente: {
        idTipoContribuyente: parseInt(this.newEntity.tipoContribuyente),
      },
      direccion: this.newEntity.direccion,
      telefono: this.newEntity.telefono,
      estado: true,
    };

    console.log(addEntity);
    this.entidadService.createEntity(addEntity).subscribe((data) => {
      this.newEntity = {} as Entity;
      this.router.navigate(['/entity']);
    });
  }

  updateEntidad() {
    const id = this.newEntity.idEntidad;
    const updateEntity: any = {
      tipoDocumento: {
        idTipoDocumento: parseInt(this.newEntity.tipoDocumento),
      },
      numeroDocumento: this.newEntity.numeroDocumento,
      razonSocial: this.newEntity.razonSocial,
      nombreComercial: this.newEntity.nombreComercial,
      tipoContribuyente: {
        idTipoContribuyente: parseInt(this.newEntity.tipoContribuyente),
      },
      direccion: this.newEntity.direccion,
      telefono: this.newEntity.telefono,
      estado: true,
    };
    console.log(this.newEntity);

    this.entidadService.updateEntity(id, updateEntity).subscribe((data) => {
      this.router.navigate(['/entity']);
    });
  }

  /* validateForm() {
    this.isFormValid =
      this.newEntity.tipoDocumento &&
      this.newEntity.numeroDocumento &&
      this.newEntity.razonSocial &&
      this.newEntity.direccion &&
      this.newEntity.telefono;
  } */
}
