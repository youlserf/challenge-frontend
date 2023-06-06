import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    this.validateForm();
  }

  getEntidadById(id: number) {
    this.entidadService.getEntityById(id).subscribe((data) => {
      this.newEntity = data;
    });
  }

  createEntidad() {
    this.entidadService.createEntity(this.newEntity).subscribe((data) => {
      this.newEntity = {} as Entity;
      this.router.navigate(['/entity']);
    });
  }

  updateEntidad() {
    const id = this.newEntity.idEntidad;
    this.entidadService.updateEntity(id, this.newEntity).subscribe((data) => {
      this.router.navigate(['/entity']);
    });
  }

  validateForm() {
    this.isFormValid =
      this.newEntity.tipoDocumento &&
      this.newEntity.numeroDocumento &&
      this.newEntity.razonSocial &&
      this.newEntity.direccion &&
      this.newEntity.telefono;
  }
}
